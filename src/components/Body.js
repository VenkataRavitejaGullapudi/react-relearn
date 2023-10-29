import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);

  function topRatedRestaurants(minRating = 4) {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.info.avgRating >= minRating
    );
    console.log(minRating);
    setRestaurants(filteredRestaurants);
  }

  function clearFilters() {
    setRestaurants(restaurantsList)
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onCli ck={() => topRatedRestaurants()}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card */}
        {
          /* Not using keys (not acceptable) <<< index <<<< unique id (best practice) */
          restaurants.map((restaurant) => (
            <RestaurantCard
              resData={restaurant.info}
              key={restaurant.info.id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
