import { FoodContext } from "@/context/FoodProvider";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const UpdateFood = ({ food }) => {
  const { UpdateFood } = useContext(FoodContext);
  const router = useRouter();

  const [nameFood, setNameFood] = useState(food.name);
  const [imgFood, setImgFood] = useState(food.imageUrl);
  const [descFood, setDescFood] = useState(food.description);
  const [ingreFood, setIngreFood] = useState(food.ingredients);

  function formatName(params) {
    const result = params.toLowerCase().split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    await UpdateFood(
      nameFood,
      descFood,
      formatIngredients(ingreFood),
      imgFood,
      food.id
    );
    router.push(`/foods/${food.id}`);
  };

  const handleJumpHome = () => {
    router.push("/");
  };

  function formatIngredients(params) {
    const result = params.map((item) => {
      const trimmedItem = item.trim(); // Menghapus spasi di awal dan akhir kata
      const capitalizedItem =
        trimmedItem.charAt(0).toUpperCase() +
        trimmedItem.slice(1).toLowerCase();
      return capitalizedItem;
    });

    return result; // Mengembalikan array yang telah diubah
  }

  return (
    <div className="p-20 w-full flex flex-col items-center space-y-4">
      <Head>
        <title>Food Mania - Update Food {formatName(food.name)}</title>
      </Head>
      <div className="flex flex-col items-start w-1/2">
        <button
          className="bg-orange-800 px-4 py-2 rounded w-40"
          onClick={handleJumpHome}
        >
          Home
        </button>
      </div>
      <form className="w-[50%] border-4 p-4">
        <div className="text-2xl text-center mb-6">Form Update Food</div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name Food
          </label>
          <input
            type="text"
            value={nameFood}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name of Your Food"
            onChange={(e) => setNameFood(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            type="text"
            value={descFood}
            className="bg-gray-50 h-40 border border-gray-300 text-gray-900 text-sm min-h-min rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            onChange={(e) => setDescFood(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ingredients
          </label>
          <input
            type="text"
            value={ingreFood}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingredients"
            onChange={(e) => setIngreFood(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image Url
          </label>
          <input
            type="text"
            value={imgFood}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Image Url"
            onChange={(e) => setImgFood(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleUpdate}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${params.id}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(params);
  const data = await res.data.data;
  console.log(data);
  return {
    props: { food: data },
  };
}

export default UpdateFood;
