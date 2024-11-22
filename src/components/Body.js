import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnline from "../utills/useOnline";
import UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [filtererdRes, setFilteredRes] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const isOnline = useOnline();
  const { username, setuserInfo } = useContext(UserContext);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setResList(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRes(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  if (!isOnline) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>You're not online. Please check your internet connection.</h1>
      </div>
    );
  }

  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-col">
      <div className="flex m-4 p-4 gap-4">
        <input
          className="border border-gray-600 p-2 rounded"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="p-2 bg-green-400 rounded"
          onClick={() => {
            let filtererdResults = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFilteredRes(filtererdResults);
          }}
        >
          Search
        </button>
        <button
          className="p-2 bg-purple-200 rounded"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating > 4));
          }}
        >
          High rating restaurants
        </button>

        <input
          className="border border-gray-600 p-2 rounded"
          value={username}
          onChange={(e) => {
            setuserInfo(e.target.value);
          }}
        />
      </div>
      <div className="flex p-4 m-4 gap-4 flex-wrap">
        {filtererdRes.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              {restaurant?.info?.isOpen ? (
                <RestaurantPromotedCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ) : (
                <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
