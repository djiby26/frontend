import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurants from "./components/Restaurants";
import UpdateRestaurant from "./components/UpdateRestaurant";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/update/:id" element={<UpdateRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
