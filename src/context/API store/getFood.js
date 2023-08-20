import axios from "axios";

export const getFood = async (token) => {
  try {
    const res = await axios.get(
      `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const dataFood = res.data.data.filter(
      (item) => item.imageUrl && item.imageUrl !== "-"
    );

    return dataFood;
  } catch (error) {
    console.log(error);
  }
};
