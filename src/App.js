import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurants from "./components/Restaurants";
import UpdateRestaurant from "./components/UpdateRestaurant";
import { fetchData } from "./features/restaurant/restaurantSlice";

function App() {
  const { restos } = useSelector((state) => state.resto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
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
