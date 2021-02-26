import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>VaccTrak</h1>
      </div>
      <div className="navbar__right">
        <a>Home</a>
        <a>Hospitals</a>
        <a>Users</a>
        <a>LOGIN/SIGNUP</a>
      </div>
    </div>
  );
}

export default Navbar;
