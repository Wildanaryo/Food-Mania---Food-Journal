import React, { createContext, useState } from "react";
// import { getFood } from "./API store/getFood";
// import { createFood } from "./API store/createFood";
import { createFood, getFood, deleteFood } from "../context/API store/index.js";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("halooooo");
  const [dataFood, setDataFood] = useState("");

  const onChangeButton = (params) => {
    setIsAuth(params);
  };

  const onLogout = () => {
    setDataFood("");
    localStorage.removeItem("token");
  };

  return (
    <FoodContext.Provider
      value={{
        setDataFood,
        isAuth,
        onChangeButton,
        getFood,
        dataFood,
        onLogout,
        createFood,
        deleteFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
