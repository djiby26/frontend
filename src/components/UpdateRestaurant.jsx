import React from "react";
import { useLocation } from "react-router-dom";

const UpdateRestaurant = () => {
  const clickedResto = useLocation().state;
  return (
    <div>
      <h3>Restaurant {clickedResto.name}</h3>
    </div>
  );
};

export default UpdateRestaurant;
