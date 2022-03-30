import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RestaurantService from "./restaurantService";

const initialState = {
  restos: [], //all restaurant fetched from the api
  currentResto: {}, //contains the value of the clicked restaurant in the list
  isLoading: false, //for the loading state when data is fetched
  displayAddForm: false,
};

export const addNewResto = createAsyncThunk(
  "resto/add",
  async (data, thunkApi) => {
    try {
      const response = await RestaurantService.createNewResto(data);
      return response;
    } catch (error) {
      if (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  }
);

export const fetchData = createAsyncThunk("resto/getAll", async (thunkApi) => {
  try {
    const response = await RestaurantService.getRestaurants();
    return response;
  } catch (error) {
    if (error) {
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

export const updateResto = createAsyncThunk(
  "resto/update",
  async ({ id, data }, thunkApi) => {
    try {
      const response = await RestaurantService.updateRestaurant(id, data);
      return response;
    } catch (error) {
      if (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  }
);

export const deleteResto = createAsyncThunk(
  "/resto/delete",
  async (id, thunkApi) => {
    try {
      const response = await RestaurantService.deleteRestaurant(id);
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
  reducers: {
    toggleAddForm: (state, action) => {
      state.displayAddForm = action.payload;
    },
    setCurrentResto: (state, action) => {
      state.currentResto = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.restos = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getResto.fulfilled, (state, action) => {
      state.currentResto = action.payload;
    });
    builder.addCase(updateResto.fulfilled, (state, action) => {
      state.restos = [state.restos, action.payload];
    });
  },
});

export const { setCurrentResto, toggleAddForm } = restaurantSlice.actions;

export default restaurantSlice.reducer;
