import axios from "axios";
import React from "react";

export const DislikeFood = async (foodId, token) => {
  try {
    const requestBody = { foodId: foodId };
    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/unlike`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
