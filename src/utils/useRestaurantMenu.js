import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const url = (MENU_API + resId);
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse?.data);
    setResInfo(jsonResponse?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(resInfo);
  return resInfo;
};

export default useRestaurantMenu;
