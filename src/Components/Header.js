import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const contextData = useContext(UserContext);
  console.log(contextData);

  //subscribing to the store using the selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-56"></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl font-bold">
            Online Status: {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xl font-bold">
            {/* <Link>🛒({cartItems.join(", ")})</Link> */}
            {cartItems.length === 0 ? (
              <Link to="/cart">🛒- (Cart empty)</Link>
            ) : (
              <Link to="/cart">🛒- ({cartItems.length} items)</Link>
            )}
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 text-xl font-bold">{contextData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
