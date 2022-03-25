import axios from "axios";

const API_URL = "api/resto";

const getRestaurants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const RestaurantService = { getRestaurants };
export default RestaurantService;
