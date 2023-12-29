import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaraurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaraurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  function topRatedRestaurants(minRating = 4) {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.info?.avgRating >= minRating
    );
    setFilteredRestaraurants(filteredRestaurants);
  }

  function filterByText() {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.info?.name
        .toLowerCase()
        ?.includes(searchText.toLowerCase());
    });
    setFilteredRestaraurants(filteredRestaurants);
  }

  function clearFilters() {
    setFilteredRestaraurants(restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection
      </h1>
    );
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex-col p-4 gap-5">
      <div className="filters flex-col gap-5">
        <div className="search-filter flex w-full">
          <input
            type="text"
            className="search-box rounded-s-lg flex-grow px-2 py-1 border-2 border-black "
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search-btn cursor-pointer rounded-e-lg basis-8 bg-green-300 px-4 py-2"
            onClick={filterByText}
          >
            Search
          </button>
        </div>
        <div className="quick-filters flex gap-5 my-4">
          <button
            className="filter-btn cursor-pointer border-2 border-green-300 rounded-lg px-3"
            onClick={() => topRatedRestaurants()}
          >
            Top Rated Restaurants
          </button>
          <button className="filter-btn cursor-pointer" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
        <div className="m-5">
          <label for="userName">
            UserName:
            <input
              id="userName"
              type="text"
              className="border border-black m-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-4">
        {/* Restaurant Card */}
        {
          /* Not using keys (not acceptable) <<< index <<<< unique id (best practice) */
          filteredRestaurants?.map((restaurant) => (
            <Link
              className="cursor-pointer"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
