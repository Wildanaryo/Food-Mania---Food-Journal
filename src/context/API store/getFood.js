import axios from "axios";

export const getFood = async () => {
  try {
    const res = await axios.get(
      `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
          "Content-Type": "application/json",
        },
      }
    );

    const newToken = res.data.data.filter(
      (item) => item.imageUrl && item.imageUrl !== "-"
    );
    return newToken;
  } catch (error) {
    console.log(error);
    console.log(process.env);
  }
};
