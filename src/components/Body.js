import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaraurants] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    response = await response.json();
    console.log(response);
    setRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaraurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function topRatedRestaurants(minRating = 4) {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.info?.avgRating >= minRating
    );
    console.log(minRating);
    setFilteredRestaraurants(filteredRestaurants);
  }

  function filterByText() {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.info?.name.toLowerCase()?.includes(searchText.toLowerCase());
    });
    console.log(filteredRestaurants);
    setFilteredRestaraurants(filteredRestaurants);
  }

  function clearFilters() {
    setFilteredRestaraurants(restaurants)
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search-filter">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button className="search-btn" onClick={filterByText}>
            Search
          </button>
        </div>
        <div className="quick-filters">
          <button className="filter-btn" onClick={() => topRatedRestaurants()}>
            Top Rated Restaurants
          </button>
          <button className="filter-btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* Restaurant Card */}
        {
          /* Not using keys (not acceptable) <<< index <<<< unique id (best practice) */
          filteredRestaurants.map((restaurant) => (
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
