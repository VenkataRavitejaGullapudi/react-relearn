import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card rounded-md w-[250px] min-h-[380px] shadow-md">
      <img
        className="res-card__logo rounded-t-md w-full h-52"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="restaurant logo"
      />
      <div className="res-card__data px-4 py-2">
        <h3 className="font-bold py-2">{resData.name}</h3>
        <h5>{resData.cuisines?.join(", ")}</h5>
        <h5>{resData.avgRatingString}</h5>
        <h5>{resData.sla?.slaString}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promted-label bg-black text-white m-2 p-2 rounded-lg"></label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
