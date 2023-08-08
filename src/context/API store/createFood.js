import axios from "axios";

export const createFood = async (nameFood, descFood, ingreFood, imgFood) => {
  try {
    const requestBody = {
      name: nameFood,
      description: descFood,
      imageUrl: imgFood,
      ingredients: [ingreFood],
    };
    const res = await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
      requestBody,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
