import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Final Project - Food</title>
      </Head>
      <div>
        <h1>Semoga dimudahkan</h1>
      </div>
    </div>
  );
}
