import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowItems }) => {
  const { title } = category;

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 rounded ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowItems}
        >
          <span className="font-bold text-lg">
            {title}{" "}
            {category.itemCards?.length
              ? `(${category.itemCards?.length}) `
              : null}
          </span>
          <span>⬇️</span>
        </div>
        {showItems ? <ItemList data={category.itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
