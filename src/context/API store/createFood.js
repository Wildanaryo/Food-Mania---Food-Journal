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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/create-food`,
      requestBody,
      {
        headers: {
          apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
