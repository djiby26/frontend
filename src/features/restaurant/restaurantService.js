import axios from "axios";

const API_URL = "http://localhost:3001/api/resto";

const getRestaurants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getOneRestaurant = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
const updateRestaurant = async (id, data) => {
  // const response = await axios.post(`${API_URL}/${id}`);
  // return response.data;
};
const deleteRestaurant = async (id) => {
  // const response = await axios.get(`${API_URL}/${id}`);
  // return response.data;
};

const RestaurantService = {
  getRestaurants,
  getOneRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
export default RestaurantService;
