import axios from "axios";
import React from "react";

export const InputReview = async (isRating, isReview, foodId, token) => {
  try {
    const requestBody = {
      rating: isRating,
      review: isReview,
    };
    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/rate-food/${foodId}`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
