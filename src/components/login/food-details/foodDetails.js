import Link from "next/link";
import React from "react";

const FoodDetails = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          <Link href={`/foods/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </>
  );
};

export default FoodDetails;
