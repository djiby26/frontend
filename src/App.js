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

function App() {
  const { restos, displayAddForm } = useSelector((state) => state.resto);
  const dispatch = useDispatch();

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
        {displayAddForm && <AddRestaurant />}
        <Routes>
          <Route path="/" element={<Restaurants restos={restos} />} />
          {/* <Route path="/update/:restoId" element={<UpdateRestaurant />} /> */}
          <Route path="/update" element={<UpdateRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
