import axios from "axios";
import React from "react";

export const registerApi = async (
  isName,
  isEmail,
  isPass,
  isConPass,
  isRole,
  isProfileUrl,
  isPhoneNumber
) => {
  try {
    const requestBody = {
      name: isName,
      email: isEmail,
      password: isPass,
      passwordRepeat: isConPass,
      role: isRole,
      profilePictureUrl: isProfileUrl,
      phoneNumber: isPhoneNumber,
    };
    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/register`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
