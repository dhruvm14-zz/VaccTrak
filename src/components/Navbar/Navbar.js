import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { auth } from "../../firebase";
import "./Navbar.css";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>VaccTrak</h1>
      </div>
      <div className="navbar__right">
        <a>Home</a>
        <a>Hospitals</a>
        <a>Users</a>
        <button onClick={auth.signOut()}>LOGIN/SIGNUP</button>
      </div>
    </div>
  );
}

export default Navbar;
