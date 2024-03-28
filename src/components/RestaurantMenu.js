import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [categoryShowIndex, setCategoryShowIndex] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center flex-col p-4 gap-5">
      <h1 className="text-2xl font-bold my-4">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </p>
      {categories?.map((category, index) => {
        // Controlled component
        return (
          <RestaurantCategory
            showItems={index === categoryShowIndex && true}
            onHeadClick={() =>
              categoryShowIndex === index
                ? setCategoryShowIndex(-1)
                : setCategoryShowIndex(index)
            }
            key={category?.card?.card.title}
            data={category?.card?.card}
            set
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
