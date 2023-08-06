import axios from "axios";
import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("halooooo");
  const [dataFood, setDataFood] = useState("");

  const onChangeButton = (params) => {
    setIsAuth(params);
  };

  const getFood = async () => {
    try {
      // const requestBody = {
      //   email: "Wildanaryo@gmail.com",
      //   password: "qwerty123",
      // };
      const res = await axios.get(
        `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
        // requestBody,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
            "Content-Type": "application/json",
          },
        }
      );
      const newToken = res.data.data.filter(
        (item) => item.imageUrl && item.imageUrl !== "-"
      );
      // console.log(newToken);
      setDataFood(newToken);
      localStorage.setItem("token", newToken);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    setDataFood("");
    localStorage.removeItem("token");
  };

  return (
    <FoodContext.Provider
      value={{ isAuth, onChangeButton, getFood, dataFood, onLogout }}
    >
      {children}
    </FoodContext.Provider>
  );
};
