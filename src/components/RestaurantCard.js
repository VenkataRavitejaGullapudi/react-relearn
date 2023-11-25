import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-card__logo"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="restaurant logo"
      />
      <div className="res-card__data">
        <h3>{resData.name}</h3>
        <h5>{resData.cuisines?.join(", ")}</h5>
        <h5>{resData.avgRatingString}</h5>
        <h5>{resData.sla?.slaString}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
