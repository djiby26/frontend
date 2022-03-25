import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import restaurantReducer from "../features/restaurant/restaurantSlice";

const getRestos = async () => {
  try {
    const response = await axios.get("/api/resto");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const data = () => getRestos();
console.log(data());

export const store = configureStore({
  reducer: { resto: restaurantReducer },
  preloadedState: {
    resto: {
      restos: [],
      isLoading: false,
      isSuccess: false,
    },
  },
});
