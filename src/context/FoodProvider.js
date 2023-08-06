import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("halooooo");

  const onChangeButton = (params) => {
    setIsAuth(params);
  };

  return (
    <FoodContext.Provider value={{ isAuth, onChangeButton }}>
      {children}
    </FoodContext.Provider>
  );
};
