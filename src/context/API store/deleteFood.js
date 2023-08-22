import axios from "axios";

export const deleteFood = async (foodId) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/delete-food/${foodId}`,
      {
        headers: {
          apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
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
