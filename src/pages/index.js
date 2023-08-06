import { Inter } from "next/font/google";
import Head from "next/head";
import { FoodContext } from "@/context/FoodProvider";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isAuth, onChangeButton } = useContext(FoodContext);

  const handleClick = () => {
    onChangeButton("ganti terus");
  };

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Final Project - Food</title>
      </Head>
      <div>
        <h1>Semoga dimudahkan {isAuth}</h1>
        <button onClick={handleClick}>Change</button>
      </div>
    </div>
  );
}
