import React from "react";
import { useSelector } from "react-redux";

const Restaurants = () => {
  const { restos } = useSelector((state) => state.resto);
  return (
    <div>
      he
      {/* <h4>{restos[0]}</h4> */}
    </div>
  );
};

export default Restaurants;
