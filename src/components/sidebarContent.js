import { FoodContext } from "@/context/FoodProvider";
import React, { useContext } from "react";
import Sidebar from "./sidebar";

const SidebarContent = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(FoodContext);
  return (
    <div
      className={`fixed w-60 md:block h-screen z-10 ${
        isSidebarOpen ? "block absolute top-0 left-0 bg-black z-10" : "hidden"
      }`}
    >
      <Sidebar />
    </div>
  );
};

export default SidebarContent;
