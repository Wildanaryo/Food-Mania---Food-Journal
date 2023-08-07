import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const FoodDetails = ({ food }) => {
  const router = useRouter();

  function formatName(params) {
    const result = params.toLowerCase().split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  }

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleJumpHome = () => {
    router.push("/");
  };

  return (
    <div className="p-20">
      <Head>
        <title>Food Mania- {formatName(food.name)}</title>
      </Head>
      <button
        className="bg-orange-800 px-4 py-2 rounded mt-20"
        onClick={handleJumpHome}
      >
        Home
      </button>
      <div className="grid place-items-center w-full">
        <h1 className="text-center text-3xl">{formatName(food.name)}</h1>
        <img className="w-[75%] mt-10" src={food.imageUrl} alt={food.name} />
        <p className="text-lg mt-5">{food.description}</p>
        <button
          className="bg-blue-500 px-4 py-2 rounded mt-20"
          onClick={handleDelete}
        >
          Delete Food
        </button>
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
