import axios from "axios";

const API_URL = "http://localhost:3001/api/resto";

const getRestaurants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createNewResto = async (data) => {
  const response = await axios.post(API_URL, data);
  return response;
};

const getOneRestaurant = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
const updateRestaurant = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response;
};
const deleteRestaurant = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response;
};

const RestaurantService = {
  getRestaurants,
  createNewResto,
  getOneRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
export default RestaurantService;
