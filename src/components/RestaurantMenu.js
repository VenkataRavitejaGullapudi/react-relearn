import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(useState())
  const { resId } = useParams();

  const fetchMenu = async () => {
    const url = "https://corsproxy.io/?" + encodeURIComponent(MENU_API + resId);
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse?.data);
    setResInfo(jsonResponse?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, cusines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h5>
        {cusines?.join(", ")} - {costForTwoMessage}
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
