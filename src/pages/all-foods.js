import CustomHead from "@/components/customHead";
import { FoodContext } from "@/context/FoodProvider";
import Link from "next/link";
import React, { useContext, useState } from "react";

function Foods() {
  const [image, setImage] = useState("");
  const { dataFood } = useContext(FoodContext);

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

    return "★".repeat(params);
  }

  console.log(dataFood);
  return (
    <div className="space-y-10">
      <CustomHead title="Food Mania - All Food" />
      <h1 className="w-full text-center text-4xl mb-20 mt-20">
        Under Maintenance
      </h1>
      <section className="w-full flex flex-col items-center space-y-10">
        {dataFood
          ? dataFood.map((food, index) => (
              <Link
                key={index}
                href={`foods/${food.id}`}
                className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-0 hover:scale-110 transition-all duration-500 ease-in-out"
              >
                <div className="h-96 w-full">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={food.imageUrl}
                  />
                </div>
                <div className="bg-slate-800 w-full flex-col flex  justify-center items-center gap-3 p-4">
                  <h2 className="text-4xl text-left w-full">{food.name}</h2>
                  <p className="">{food.description}</p>
                  <p>{ratingStar(food.rating)}</p>
                </div>
              </Link>
            ))
          : null}
      </section>
    </div>
  );
}

export default Foods;
