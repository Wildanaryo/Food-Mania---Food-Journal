import React, { createContext, useEffect, useState } from "react";
import {
  createFood,
  getFood,
  deleteFood,
  UpdateFood,
} from "../context/API store/index.js";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [dataFood, setDataFood] = useState("");
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
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
