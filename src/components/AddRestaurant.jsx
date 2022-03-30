import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewResto,
  toggleAddForm,
} from "../features/restaurant/restaurantSlice";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewResto({ name: name, address: address }));
    setAddress("");
    setName("");
  };

  return (
    <div className="restaurant-add">
      <form onSubmit={handleSubmit} className="add-form" action="">
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="restaurant name"
          name="name"
        />
        <input
          value={address}
          onChange={handleChange}
          type="text"
          placeholder="restaurant address"
          name="address"
        />
        <div>
          <input
            onClick={() => {
              dispatch(toggleAddForm(false));
            }}
            value="Cancel"
            type="button"
          />
          <input value="Send" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
