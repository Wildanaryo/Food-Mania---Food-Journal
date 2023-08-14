import CustomHead from "@/components/customHead";
import { FoodContext } from "@/context/FoodProvider";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useState } from "react";

function Foods() {
  const [image, setImage] = useState("");
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

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await axios.post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/upload-image`,
        formData,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataFood);
  return (
    <div>
      <CustomHead title="Food Mania - All Food" />
      Under Maintenance
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUploadImage}>Submit</button>
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
