import "@/styles/globals.css";
import { createContext, useState } from "react";
import FoodContext, { FoodProvider } from "@/context/FoodProvider";

export default function App({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("halo halo bandung");
  return (
    <FoodProvider>
      <Component {...pageProps} />
    </FoodProvider>
  );
}
