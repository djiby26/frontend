import React from "react";
import { useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";
import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ restos }) => {
  const { isLoading } = useSelector((state) => state.resto);
  if (isLoading) {
    return <LoadingPage />;
  }

  let res = 1 + 3;

  console.log(res);
  return (
    <div className="list-restaurant">
      {restos.map((resto) => (
        <RestaurantItem key={resto._id} resto={resto} />
      ))}
    </div>
  );
};

export default Restaurants;
