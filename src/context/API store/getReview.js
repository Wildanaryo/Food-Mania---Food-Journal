import axios from "axios";
import React from "react";

export const GetReview = async (id) => {
  try {
    const res = await axios.get(
      `https://api-bootcamp.do.dibimbing.id/api/v1/food-rating/${id}`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
