import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddRestaurant from "./components/AddRestaurant";
import Restaurants from "./components/Restaurants";
import UpdateRestaurant from "./components/UpdateRestaurant";
import {
  fetchData,
  toggleAddForm,
} from "./features/restaurant/restaurantSlice";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { restos, displayAddForm } = useSelector((state) => state.resto);
  const dispatch = useDispatch();
  const notify = (text) => toast(text);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <button
          onClick={() => {
            dispatch(toggleAddForm(true));
          }}
          className="add-resto-btn"
        >
          Add Resto
        </button>
        {displayAddForm && <AddRestaurant notify={notify} />}
        <Routes>
          <Route path="/" element={<Restaurants restos={restos} />} />
          {/* <Route path="/update/:restoId" element={<UpdateRestaurant />} /> */}
          <Route path="/update" element={<UpdateRestaurant />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
