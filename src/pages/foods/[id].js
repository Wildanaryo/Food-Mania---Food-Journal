import { FoodContext } from "@/context/FoodProvider";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const FoodDetails = ({ food }) => {
  const { deleteFood } = useContext(FoodContext);
  const [showDelete, setShowDelete] = useState(false);
  const router = useRouter();

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

  const handleJumpHome = () => {
    router.push("/");
  };

  const handleUpdate = () => {
    router.push(`/foods/update-food/${food.id}`);
  };

  function formatDate(params) {
    const date = new Date(params.split("T")[0]);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateFormat = date.toLocaleDateString(undefined, options);
    return dateFormat;
  }

  console.log(food.updatedAt.split("T")[0]);

  return (
    <div className="px-20 py-5">
      <Head>
        <title>Food Mania- {formatName(food.name)}</title>
      </Head>
      {showDelete && (
        <div className="w-96 h-80 space-y-10 bg-gray-800 text-white rounded-lg shadow-md flex flex-col justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
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
      )}

      <div className="flex justify-between mb-8">
        <button
          className="bg-blue-500 px-4 py-2 rounded"
          onClick={() => setShowDelete(true)}
        >
          Delete Food
        </button>
        <button
          className="bg-orange-800 px-4 py-2 rounded"
          onClick={handleJumpHome}
        >
          Home
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded"
          onClick={handleUpdate}
        >
          Edit Food
        </button>
      </div>
      <div className="grid place-items-center w-full">
        <h1 className="text-center text-6xl">{formatName(food.name)}</h1>
        <h5 className="text-center text-base mt-10">
          Updated {formatDate(food.updatedAt)}
        </h5>
        <img className="w-[75%] mt-2" src={food.imageUrl} alt={food.name} />
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

export default FoodDetails;
