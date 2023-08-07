import Head from "next/head";
import { FoodContext } from "@/context/FoodProvider";
import { useContext, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { setDataFood, getFood, dataFood } = useContext(FoodContext);

  const fetchFood = async () => {
    try {
      const foods = await getFood();
      setDataFood(foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  // if (typeof window !== "undefined") {
  //   const itemToken = localStorage.getItem("token");
  //   console.log(itemToken);
  // }

  function formatName(params) {
    const result = params.toLowerCase().split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  }

  return (
    <div
      className={`flex bg-black text-white min-h-screen flex-col items-center justify-between`}
    >
      <Head>
        <title>Final Project - Food</title>
      </Head>
      <section className="w-full flex flex-col place-items-center justify-center gap-10">
        <h1 className="text-6xl">
          FOOD MANIA<span className="text-xl">mantap</span>
        </h1>
        <div className="w-10/12 flex flex-row justify-around text-2xl">
          <h2 className="hover:border-b-2 sm:block hidden">CHICKEN</h2>
          <h2 className="hover:border-b-2 md:block hidden">PASTA/NOODLES</h2>
          <h2 className="hover:border-b-2 xl:block hidden">BREAKFAST</h2>
          <h2 className="hover:border-b-2 xl:block hidden">TACOS</h2>
          <h2 className="hover:border-b-2 sm:block hidden">TRADITIONAL FOOD</h2>
          <h2 className="hover:border-b-2 xl:block hidden">GLUTEN-FREE</h2>
          <h2 className="hover:border-b-2 sm:block hidden">DESERT</h2>
        </div>
        <Link href={`/foods/create-food/`}>
          <button className="bg-blue-500 px-4 py-2 rounded">Create Food</button>
        </Link>

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
      </section>
    </div>
  );
}
