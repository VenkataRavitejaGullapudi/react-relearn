import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext)
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between p-4 gap-5">
      <div className="logo-container">
        <img className="w-20 rounded-full" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items self-center">
        <ul className="flex gap-5">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
         {btnName=="Logout" && <li className="font-bold">{loggedInUser}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
