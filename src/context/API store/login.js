import axios from "axios";
import React from "react";

export const loginApi = async (isEmail, isPassword) => {
  try {
    const requestBody = {
      email: isEmail,
      password: isPassword,
    };
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/login`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
