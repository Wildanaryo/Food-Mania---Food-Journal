import CustomHead from "@/components/customHead";
import Navbar from "@/components/navbar";
import { FoodContext } from "@/context/FoodProvider";
import Heart from "@/icon/heart";
import HeartFill from "@/icon/heart-fill";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const FoodDetails = () => {
  const {
    deleteFood,
    isLogin,
    roleUser,
    token,
    DislikeFood,
    LikeFood,
    setToken,
  } = useContext(FoodContext);
  const [showDelete, setShowDelete] = useState(false);
  const [food, setFood] = useState("");
  const [like, setLike] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check the condition for redirect
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
    // if (!isLogin) {
    //   router.push("/login");
    // }

    const { id } = router.query; // Mengambil ID dari URL params

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`,
          {
            headers: {
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setFood(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      fetchData();
      setLike(food.isLike);
    }
  }, [router.query.id, food.isLike]);

  if (!food) {
    return null;
  }

  function formatName(params) {
    const result = params.toLowerCase().split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  }

  const handleDelete = async () => {
    await deleteFood(food.id);
    router.push("/");
  };

  const handleUpdate = () => {
    router.push(`/foods/update-food/${food.id}`);
  };

  const handleDislikeButton = async () => {
    await DislikeFood(food.id, token);
    setLike(false);
    console.log(food.isLike);
  };

  const handleLikeButton = async () => {
    await LikeFood(food.id, token);
    setLike(true);
    console.log(food.isLike);
  };

  function formatDate(params) {
    const date = new Date(params.split("T")[0]);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateFormat = date.toLocaleDateString(undefined, options);
    return dateFormat;
  }

  function ratingStar(params) {
    if (params <= 0) {
      return "No Rating Yet";
    }

    return "★".repeat(params);
  }

  // console.log(token);

  return (
    <div className="min-w-[500px]">
      <Navbar />
      <div
        className={`transition-all duration-500 w-96 h-80 space-y-10 bg-gray-800 text-white rounded-3xl shadow-md flex flex-col justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ${
          showDelete
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
      >
        <h2 className="text-2xl font-semibold mb-4">Are you sure?</h2>
        <div className="flex justify-around w-full">
          <button
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
            onClick={() => setShowDelete(false)}
          >
            No
          </button>
        </div>
      </div>

      <div
        className={`px-0 md:px-20 py-5 transition-all duration-500 ${
          showDelete ? "opacity-20" : "opacity-100"
        }`}
      >
        <CustomHead title={`Food Mania- ${formatName(food.name)}`} />

        <div className="grid place-items-center">
          {roleUser === "admin" && (
            <div className="flex justify-between mb-8 w-11/12">
              <button
                className="bg-blue-500 px-4 py-2 rounded"
                onClick={() => setShowDelete(true)}
              >
                Delete Food
              </button>
              <button
                className="bg-blue-500 px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Edit Food
              </button>
            </div>
          )}
        </div>
        <section className="grid place-items-center">
          <div className="grid place-items-center w-11/12 md:w-2/3">
            <h1 className="text-center text-6xl">{formatName(food.name)}</h1>
            <h5 className="text-center text-base mt-10">
              {food.updatedAt === food.createdAt ? (
                <div>
                  Created {formatDate(food.updatedAt)}
                  <p className="text-yellow-400 text-sm">
                    {ratingStar(food.rating)}
                  </p>
                </div>
              ) : (
                <div>
                  Updated {formatDate(food.updatedAt)}
                  <p className="text-yellow-400 text-sm">
                    {ratingStar(food.rating)}
                  </p>
                </div>
              )}
            </h5>
            <img className="w-full mt-2" src={food.imageUrl} alt={food.name} />
            <div className="flex items-start w-full mt-2">
              {like ? (
                <button onClick={handleDislikeButton}>
                  <HeartFill width={30} fill={"#C51f1A"} />
                </button>
              ) : (
                <button onClick={handleLikeButton}>
                  <Heart width={30} fill={"#fff"} />
                </button>
              )}
            </div>
            <p className="text-lg mt-5">{food.description}</p>
            <ul className="flex flex-col justify-start w-full mt-10">
              <p className="font-bold text-xl">Ingredients :</p>
              {food.ingredients.map((item, index) => (
                <li key={index} className="text-lg">
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodDetails;
