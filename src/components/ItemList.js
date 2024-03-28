import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            className="text-left p-2 m-2 border-b-2 border-gray-200 flex"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="">{item?.card?.info?.name}</span>
                <span className="">
                  {" "}
                  - ₹{" "}
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
              <div className="absolute w-full text-center bottom-2 right-0">
                <button
                  className="px-2 py-1 mx-auto rounded-lg bg-black text-white shadow-lg m-auto"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              {console.log(item?.card?.info)}
              <img
                src={
                  CDN_URL +
                  (item?.card?.info?.imageId ||
                    item?.card?.info?.cloudinaryImageId)
                }
                className="w-full"
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
