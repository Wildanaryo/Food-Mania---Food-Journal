import React, { createContext, useState } from "react";
import {
  createFood,
  getFood,
  deleteFood,
  UpdateFood,
} from "../context/API store/index.js";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [dataFood, setDataFood] = useState("");

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
