import { LogoutApi } from "@/context/API store";
import { FoodContext } from "@/context/FoodProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Sidebar = () => {
  const { setRoleUser, roleUser, token, setToken, GetUserInfo } =
    useContext(FoodContext);
  const router = useRouter();

  const [userInfo, setUserInfo] = useState("");

  //handle logout
  const handleLogoutAccount = async () => {
    const res = await LogoutApi(token);
    setToken("");
    if (typeof window !== "undefined") {
      const itemToken = localStorage.removeItem("token");
      const roleUser = localStorage.removeItem("role");
      console.log(itemToken, roleUser);
    }
    router.push("/login");
    console.log(res);
  };

  if (typeof window !== "undefined") {
    const role = localStorage.getItem("role");
    const tokenUser = localStorage.getItem("token");
    setRoleUser(role);
    setToken(tokenUser);
  }

  const fetchUserInfo = async () => {
    const res = await GetUserInfo(token);
    setUserInfo(res);
  };

  useEffect(() => {
    fetchUserInfo();
  }, [token]);

  if (!userInfo) {
    return null;
  }

  const handleLinkProfile = () => {
    router.push("/profile/user");
  };

  console.log(userInfo);
  return (
    <div className="sticky text-white h-screen border-r left-0 top-0 flex flex-col p-4 text-xl">
      <div className="flex w-full mb-4">
        <Image
          src="/LogoFoodMania.png"
          alt="Food Mania"
          className="mx-auto w-20"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2 flex flex-col">
          <Link
            href={`/`}
            className="flex md:justify-start justify-center items-center hover:bg-slate-800 rounded-3xl py-2 px-4 "
          >
            <Image
              src="/home.png"
              alt="Home"
              className="w-7"
              width={50}
              height={50}
            />
            <p className="ml-3 md:block hidden">Home</p>
          </Link>
          <Link
            href={`/all-foods/`}
            className="flex md:justify-start justify-center items-center hover:bg-slate-800 rounded-3xl py-2 px-4 "
          >
            <Image
              src="/fork-and-knife-silhouette.png"
              alt="All Foods"
              className="w-7"
              width={50}
              height={50}
            />
            <p className="ml-3 md:block hidden">All Foods</p>
          </Link>
          {roleUser === "admin" && (
            <Link
              href={`/foods/create-food/`}
              className="flex md:justify-start justify-center items-center hover:bg-slate-800 rounded-3xl py-2 px-4"
            >
              <img
                src="/add-square-button.png"
                alt="All Foods"
                className="w-7"
                width={50}
                height={50}
              />
              <p className="ml-3 md:block hidden">Create Foods</p>
            </Link>
          )}
        </div>
        <div>
          {userInfo && (
            <button
              onClick={handleLinkProfile}
              className="flex mx-auto md:mx-0 items-center hover:bg-slate-800 rounded-3xl py-2 px-4"
            >
              <img
                src={userInfo.profilePictureUrl}
                alt="Update Profile"
                className="w-7 h-7 rounded-full object-cover object-center "
                width={50}
                height={50}
              />
              <p className="ml-3 md:block hidden text-left">{userInfo.name}</p>
            </button>
          )}
          {/* <button className="flex mx-auto md:mx-0 items-center hover:bg-slate-800 rounded-3xl py-2 px-4">
            <Image
              src="/user-shape.png"
              alt="Update Profile"
              className="w-7"
              width={50}
              height={50}
            />
            <p className="ml-3 md:block hidden">Update Profile</p>
          </button> */}
          <button
            className="flex mx-auto md:mx-0 hover:bg-red-700 rounded-3xl py-2 px-4"
            onClick={handleLogoutAccount}
          >
            <Image
              src="/sign-out-option.png"
              alt="Log Out"
              className="w-7"
              width={50}
              height={50}
            />
            <p className="ml-3 md:block hidden">Sign-Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
