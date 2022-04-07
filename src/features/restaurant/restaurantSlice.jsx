import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RestaurantService from "./restaurantService";

const initialState = {
  restos: [], //all restaurant fetched from the api
  currentResto: {}, //contains the value of the clicked restaurant in the list
  isLoading: false, //for the loading state when data is fetched
  displayAddForm: false,
};

//Create a new Restaurant
export const addNewResto = createAsyncThunk(
  "resto/add",
  async (data, thunkApi) => {
    try {
      const response = await RestaurantService.createNewResto(data);
      return response.data;
    } catch (error) {
      if (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  }
);

//fetching the data
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

//get one restaurant from the id
export const getResto = createAsyncThunk(
  "resto/getOne",
  async (id, thunkApi) => {
    try {
      const response = await RestaurantService.getOneRestaurant(id);
      return response.data;
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
      // thunkApi.fulfillWithValue(response);
      return response.data;
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
      return response.date;
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
    //change the state of the form that add a new Restaurant
    toggleAddForm: (state, action) => {
      state.displayAddForm = action.payload;
    },
    //Set the state to the Restaurant clicked by the user on the list
    setCurrentResto: (state, action) => {
      state.currentResto = action.payload;
    },
  },
  //add some listener when async action return a response
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.restos = [];
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.restos = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteResto.fulfilled, (state, action) => {})
      .addCase(updateResto.fulfilled, (state, action) => {
        state.restos = [
          ...state.restos.filter((resto) => resto._id !== action.payload._id),
          action.payload,
        ];
      })
      .addCase(updateResto.rejected, (state, action) => {});
  },
});

export const { setCurrentResto, toggleAddForm } = restaurantSlice.actions;

export default restaurantSlice.reducer;
