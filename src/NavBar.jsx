import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "./AuthContextProvider";
function NavBar(props) {
  const { isLoggedIn } = useAuthContext();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="users">Users</NavLink>
      {!isLoggedIn && <NavLink to="login">Login</NavLink>}
    </nav>
  );
}
export default NavBar;
