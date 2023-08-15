import axios from "axios";
import React from "react";

export const loginApi = async (isEmail, isPassword) => {
  try {
    const requestBody = {
      email: isEmail,
      password: isPassword,
    };
    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/login`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );
    return res.data.token;
  } catch (error) {
    return error.response.data;
  }
};
