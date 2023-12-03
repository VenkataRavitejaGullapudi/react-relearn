import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  console.log(useState());
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu flex-col p-4 gap-5">
      <h1 className="text-2xl font-bold py-2">{name}</h1>
      <h5>
        {cuisines} - {costForTwoMessage}
      </h5>
      <h4>Menu</h4>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" "}
              {item?.card?.info?.price || item?.card?.info?.defaultPrice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
