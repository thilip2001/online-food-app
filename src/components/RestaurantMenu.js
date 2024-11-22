import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LOGO_URL } from "../utills/constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const onOpenIndexc = (index) => {
    return;
  };
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold  text-lg">{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      {/* Categories accordions */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            category={category.card.card}
            key={category.card.card.title}
            showItems={index === showIndex}
            setShowItems={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
