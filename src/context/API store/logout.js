import axios from "axios";
import React from "react";

export const LogoutApi = async (token) => {
  try {
    const res = await axios.get(
      `https://api-bootcamp.do.dibimbing.id/api/v1/logout`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    return res;
  } catch (error) {
    return error;
  }
};
