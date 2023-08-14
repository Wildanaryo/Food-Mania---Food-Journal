import React, { useState } from "react";
import Image from "next/image";
import CustomHead from "@/components/customHead";

function LoginPage() {
  const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);

  const handleSignUp = () => {
    setLogin(!login);
    // setRegister(!register);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center h-screen w-full">
      <CustomHead title="Food Mania - Login Form" />
      <div className="flex flex-col w-full p-8">
        <label
          htmlFor="check"
          className="bg-gray-100 absolute top-10 w-40 h-10 rounded-full"
        >
          <input
            onClick={handleSignUp}
            type="checkbox"
            id="check"
            className="sr-only peer"
            defaultChecked={login}
          />
          <span className="w-3/5 h-4/5 bg-rose-300 absolute rounded-3xl left-[8px] top-1 peer-checked:bg-rose-600 peer-checked:left-[56px] transition-all duration-500 grid place-items-center text-xl">
            {login ? "Login" : "Register"}
          </span>
        </label>
        {login && (
          <div>
            <h1 className="text-6xl mb-2">Welcome Back!</h1>
            <h5 className="text-lg mb-14">
              Enter your Credentials to access your account
            </h5>
            <form className="w-full">
              <div className="mb-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  E-mail Address
                </label>
                <input
                  type="text"
                  // value={nameFood}
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your E-mail"
                  // onChange={(e) => setNameFood(e.target.value)}
                  // required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  // value={descFood}
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your Password"
                  // onChange={(e) => setDescFood(e.target.value)}
                  // required
                />
              </div>

              <button
                type="submit"
                className="text-white w-full border-2 rounded-xl py-2 bg-gray-700"
                // onClick={handleCreateFood}
              >
                Sign-in
              </button>
              <div className="mt-2 text-center">
                Don’t have an account?{" "}
                <span className="text-blue-500" onClick={handleSignUp}>
                  Sign Up
                </span>
              </div>
            </form>
          </div>
        )}
        {!login && (
          <div>
            <h1 className="text-6xl mb-14">Get Started Now</h1>

            <form className="w-full">
              <div className="mb-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  // value={nameFood}
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your E-mail"
                  // onChange={(e) => setNameFood(e.target.value)}
                  // required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  E-mail Address
                </label>
                <input
                  type="text"
                  // value={nameFood}
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your E-mail"
                  // onChange={(e) => setNameFood(e.target.value)}
                  // required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  // value={descFood}
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your Password"
                  // onChange={(e) => setDescFood(e.target.value)}
                  // required
                />
              </div>

              <button
                type="submit"
                className="text-white w-full border-2 rounded-xl py-2 bg-gray-700"
                // onClick={handleCreateFood}
              >
                Sign-up
              </button>
              <div className="mt-2 text-center">
                Have an account?{" "}
                <span className="text-blue-500" onClick={handleSignUp}>
                  Sign In
                </span>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full"
            src={"/food.jpg"}
            alt="Food Image Animation"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
