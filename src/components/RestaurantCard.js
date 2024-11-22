import { CDN_URL } from "../utills/constants";

const RestaurantCard = ({ name, cloudinaryImageId, avgRating }) => {
  return (
    <div className=" w-[250px] bg-violet-200 p-4 rounded-lg shadow-lg h-[300px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt=""
        className="rounded-lg h-[200px] w-[100%]"
      />
      <div className="divider"></div>
      <div>
        <p className="font-bold py-2">{name}</p>
        <p className="font-extralight">{avgRating} </p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className={'absolute bg-gray-800 text-white p-1 m-2 rounded-lg'} >Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
