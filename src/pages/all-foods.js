import { FoodContext } from "@/context/FoodProvider";
import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";

function Foods() {
  const { setDataFood, getFood, dataFood } = useContext(FoodContext);

  //   if (!dataFood) {
  //     return null;
  //   }

  function formatName(params) {
    const result = params.toLowerCase().split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  }

  console.log(dataFood);
  return (
    <div>
      <Head>
        <title>Food Mania - All Food</title>
      </Head>
      Under Maintenance
      {dataFood
        ? dataFood.map((food, index) => (
            <div key={index} className="w-full grid place-items-center">
              <Link
                href={`/foods/${food.id}`}
                className="grid place-items-center w-[60%]"
              >
                <img
                  className="w-full"
                  key={index}
                  src={food.imageUrl}
                  alt={food.description}
                />
                <h1 className="text-center text-3xl">
                  {formatName(food.name)}
                </h1>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
}

export default Foods;
