import React, { createContext, useEffect, useState } from "react";
import {
  createFood,
  getFood,
  deleteFood,
  UpdateFood,
  loginApi,
  registerApi,
} from "../context/API store/index.js";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [dataFood, setDataFood] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [roleUser, setRoleUser] = useState("");
  const [token, setToken] = useState("");

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

  return (
    <FoodContext.Provider
      value={{
        setDataFood,
        getFood,
        dataFood,
        createFood,
        deleteFood,
        UpdateFood,
        loginApi,
        registerApi,
        isLogin,
        setIsLogin,
        roleUser,
        setRoleUser,
        token,
        setToken,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
