import { useContext, useState } from "react";
import { LOGO_URL } from "../utills/constants";
import { Link } from "react-router-dom";
import UserContext from "../utills/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utills/cartSlice";

const Title = () => (
  <a href="/">
    <img className="w-24" src={LOGO_URL} alt="" />
  </a>
);

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-violet-200 shadow-lg mb-4 ">
      <Title />
      <div className="flex">
        <ul className="flex p-4 m-4 gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="font-bold text-md">
            {" "}
            <Link to={"/cart"}>Cart ({cartItems.length} items )</Link>
          </li>
          <li className="font-thin">{data.username}</li>
        </ul>
        <div
          className="flex p-4 m-4 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          <p>{isLogin ? "Logout" : "Login"}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
