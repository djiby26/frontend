import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "../features/restaurant/restaurantSlice";

export const store = configureStore({
  reducer: { resto: restaurantReducer },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});
