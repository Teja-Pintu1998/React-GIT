import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItemsFromCart = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart items</h1>
      <div className="w-6/12 m-auto">

      <button
          className="p-2 m-6 bg-gray-300 text-black rounded-lg font-semibold"
          onClick={handleRemoveItemsFromCart}
        >
          Remove Items
        </button>
        <button
          className="p-2 m-6 bg-gray-300 text-black rounded-lg font-semibold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        
        {cartItems.length === 0? <h1 className="font-bold">This cart is empty.</h1>:
        <ItemList items={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
