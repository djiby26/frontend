import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RestaurantService from "./restaurantService";

const initialState = {
  restos: [],
  //   error: false,
  isLoading: false,
  isSuccess: false,
  //   message: "",
};

export const getRestaurants = createAsyncThunk(
  "resto/get",
  async (thunkApi) => {
    try {
      return await RestaurantService.getRestaurants();
    } catch (error) {
      return thunkApi.rejectWithValue(
        "An error occured while getting Restautants"
      );
    }
  }
);

const restaurantSlice = createSlice({
  name: "resto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.restos = action.payload;
    });
  },
});

export const {} = restaurantSlice.actions;

export default restaurantSlice.reducer;
