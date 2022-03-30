import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteResto,
  setCurrentResto,
} from "../features/restaurant/restaurantSlice";

const RestaurantItem = ({ resto }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="restaurant-item">
      <div
        onClick={() => {
          navigate(`/update`, { state: resto });
          dispatch(setCurrentResto(resto));
        }}
        style={{ cursor: "pointer", flex: "2 " }}
      >
        <h3>{resto.name}</h3>
        <h6>{resto.address}</h6>
      </div>
      <FaTrash
        onClick={() => dispatch(deleteResto(resto._id))}
        color="red"
        cursor="pointer"
        style={{ height: "3rem" }}
      />
    </div>
  );
};

export default RestaurantItem;
