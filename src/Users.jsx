import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export const Users = (props) => {
  return (
    <>
      <h2>Users:</h2>
      <NavLink to="/"></NavLink>
      <NavLink to="/"></NavLink>
      <NavLink to="/"></NavLink>
      <Outlet />
    </>
  );
};
