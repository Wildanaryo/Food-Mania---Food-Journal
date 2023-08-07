import { FoodContext } from "@/context/FoodProvider";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function CreateFood() {
  const { setDataFood, onLogout, getFood, dataFood, createFood } =
    useContext(FoodContext);

  const [nameFood, setNameFood] = useState("");
  const [imgFood, setImgFood] = useState("");
  const [descFood, setDescFood] = useState("");

  const router = useRouter();

  const handleCreateFood = async (event) => {
    event.preventDefault();
    await createFood(nameFood, descFood, imgFood);
    router.push(`/`);

    // await fetchFood();
    // console.log(nameFood);
    // console.log(descFood);
    // console.log(imgFood);
  };

  // const fetchFood = async () => {
  //   try {
  //     const foods = await getFood();
  //     console.log(foods);
  //     setDataFood(foods);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex justify-center p-10">
      <Head>
        <title>Food Mania - Create Food</title>
      </Head>
      <form className="w-[60%] border-4 p-4">
        <div className="text-2xl text-center mb-6">Form Create Food</div>
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
          <input
            type="text"
            value={descFood}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            onChange={(e) => setDescFood(e.target.value)}
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
          onClick={handleCreateFood}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
