import React from "react";
import { CDN_URL } from "../utills/constants";
import { addItem } from "../utills/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(addItem(item));
  };
  console.log(data);
  
  return (
    <div>
      {data?.map((item) => (
        <div
          key={item.card.info.id}
          className=" m-2 border-b flex gap-4 justify-between py-4"
        >
          <div className="w-9/12">
            <div className=" text-left">
              <div className="flex gap-2 py-2">
                <span className="text-sm font-bold text-gray-700">
                  {item.card.info.name} -
                </span>
                <span className="text-sm font-bold text-gray-700">
                  {`₹${
                    item.card.info.price || item.card.info.defaultPrice / 100
                  }`}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute">
              <button
                className="bg-green-700 rounded text-white px-2 mx-12 my-20"
                onClick={() => handleCartItems(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="rounded-lg hover:scale-105 transition-transform duration-300 w-full h-24 "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
