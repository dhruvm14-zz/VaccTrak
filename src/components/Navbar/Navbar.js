import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { auth } from "../../firebase";
import "./Navbar.css";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const handleSignout = () => {
    auth.signOut();
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>VaccTrak</h1>
        <p>{currentUser && "Hello Admin"}</p>
      </div>
      <div className="navbar__right">
        <a>Home</a>
        <a>Hospitals</a>
        <a>Users</a>
        <button onClick={handleSignout}>LOGIN/SIGNUP</button>
      </div>
    </div>
  );
}

export default Navbar;
