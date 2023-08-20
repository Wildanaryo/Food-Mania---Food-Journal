import CustomHead from "@/components/customHead";
import Navbar from "@/components/navbar";
import { FoodContext } from "@/context/FoodProvider";
import Heart from "@/icon/heart";
import HeartFill from "@/icon/heart-fill";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

function Foods() {
  const [image, setImage] = useState("");
  const { dataFood, getFood, setDataFood, token, setToken } =
    useContext(FoodContext);

  const fetchFood = async () => {
    try {
      const foods = await getFood(token);
      setDataFood(foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const itemToken = localStorage.getItem("token");
      if (itemToken) {
        console.log(itemToken);
        setToken(itemToken);
        // setIsLogin(true);
      } else {
        router.push("/login");
      }
    }
    if (token) {
      fetchFood();
    }
  }, [token]);

  if (!dataFood) {
    return null;
  }

  function formatName(params) {
    const result = params.toLowerCase().split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  }

  function ratingStar(params) {
    if (params <= 0) {
      return "No Ratings Yet";
    }

    return <div className="text-yellow-500">{"★".repeat(params)}</div>;
  }

  console.log(dataFood);
  return (
    <div className="space-y-10">
      <Navbar />
      <CustomHead title="Food Mania - All Food" />
      <section className="w-full flex flex-col items-center space-y-10">
        {dataFood
          ? dataFood.map((food, index) => (
              <Link
                key={index}
                href={`foods/${food.id}`}
                className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-0 hover:outline"
              >
                <div className="h-96 w-full">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={food.imageUrl}
                  />
                </div>
                <div className="bg-slate-800 w-full flex-col flex  justify-center items-center gap-3 p-4">
                  <h2 className="text-4xl text-left w-full">
                    {formatName(food.name)}
                  </h2>
                  <p>{food.description}</p>
                  <p>{ratingStar(food.rating)}</p>
                  <div>
                    {food.isLike ? (
                      <HeartFill width={30} fill={"#C51f1A"} />
                    ) : (
                      <Heart width={30} fill={"#fff"} />
                    )}
                  </div>
                </div>
              </Link>
            ))
          : null}
      </section>
    </div>
  );
}

export default Foods;
