import Head from "next/head";
import { FoodContext } from "@/context/FoodProvider";
import { useContext, useEffect } from "react";

export default function Home() {
  const { isAuth, onLogout, getFood, dataFood } = useContext(FoodContext);

  useEffect(() => {
    getFood();
  }, []);

  const handleLogin = () => {
    getFood();
    // onLogin();
  };

  const handleLogout = () => {
    onLogout();
  };

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

  console.log(formatName("nasi uduk"));

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
        {dataFood
          ? dataFood.map((item, index) => (
              <div key={index} className="w-full">
                <div className="w-full grid place-items-center">
                  <img
                    className="w-[60%]"
                    key={index}
                    src={item.imageUrl}
                    alt={item.description}
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-center text-3xl">
                    {formatName(item.name)}
                  </h1>
                </div>
              </div>
            ))
          : null}
      </section>
    </div>
  );
}
