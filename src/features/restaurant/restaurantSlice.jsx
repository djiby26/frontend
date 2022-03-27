import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RestaurantService from "./restaurantService";

const initialState = {
  restos: [],
  currentResto: {},
  isLoading: false,
};

export const fetchData = createAsyncThunk("resto/getAll", async (thunkApi) => {
  try {
    const response = await RestaurantService.getRestaurants();
    return response;
  } catch (error) {
    if (error) {
      // console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
});

export const getResto = createAsyncThunk(
  "resto/getOne",
  async (id, thunkApi) => {
    try {
      const response = await RestaurantService.getOneRestaurant(id);
      return response;
    } catch (error) {
      if (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  }
);

const restaurantSlice = createSlice({
  name: "resto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.isSuccess = true;
      state.restos = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      // state.isSuccess = false;
    });
    builder.addCase(getResto.fulfilled, (state, action) => {
      state.currentResto = action.payload;
    });
  },
});

export const {} = restaurantSlice.actions;

export default restaurantSlice.reducer;
