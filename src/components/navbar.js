import Link from "next/link";
import React, { useState } from "react";
import { ComingSoonCard } from "./comingSoonCard";
import { MenuItem } from "./menuItem";

const Navbar = () => {
  const [isShowCard, setIsShowCard] = useState(false);

  const handleShowWarning = () => {
    setIsShowCard(true);

    setTimeout(() => {
      setIsShowCard(false);
    }, 5000);
  };

  return (
    <div className="w-full flex flex-col place-items-center justify-center gap-10">
      <Link href={"/"}>
        <button className="text-6xl hover:scale-110 transition-all ease-in-out">
          FOOD MANIA<span className="text-xl">mantap</span>
        </button>
      </Link>
      <nav className="w-full sm:flex hidden flex-col items-center justify-center ">
        <div className="lg:w-10/12 w-full h-10 flex flex-row justify-around text-2xl">
          <MenuItem title="CHICKEN" media="hover:border-b-2" />
          <MenuItem
            title="BREAKFAST"
            media="hover:border-b-2 xl:block hidden"
          />
          <MenuItem title="TRADITIONAL FOOD" media="hover:border-b-2" />
          <MenuItem
            title="GLUTEN-FREE"
            media="hover:border-b-2 xl:block hidden"
          />
          <Link href={`/all-foods/`}>
            <h2 className="hover:border-b-2">ALL FOODS</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
