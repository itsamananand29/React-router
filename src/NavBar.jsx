import React from "react";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="users">Users</NavLink>
    </nav>
  );
}
export default NavBar;