import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, onHeadClick }) => {
  const handleClick = () => {
    onHeadClick();
  };
  const onKeyDown = (e) => {
    if (e.code == "Enter") {
      handleClick();
    }
  };

  return (
    <div className="rounded-md border border-gray-100 w-9/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 flex-col gap-5">
      {/* Accordion Header */}
      <div
        tabIndex={0}
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
        onKeyDown={onKeyDown}
      >
        <span className="font-bold text-lg">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
