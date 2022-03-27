import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantItem = ({ resto }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/update`, { state: resto });
      }}
      // dispatch(getResto(resto._id));
      className="restaurant-item"
    >
      <div>
        <h3>{resto.name}</h3>
        <h6>{resto.address}</h6>
      </div>
      <button></button>
    </div>
  );
};

export default RestaurantItem;
