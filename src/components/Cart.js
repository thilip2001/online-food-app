import React, { useCallback } from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utills/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-purple-700 rounded text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <ItemList data={cartItems} />
        {cartItems.length === 0 && (
          <h1>Cart items are empty, Please add items!</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
