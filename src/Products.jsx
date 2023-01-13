import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Products(props) {
  return (
    <>
      <h2>Products:</h2>
      <nav>
        <NavLink to="featured">Featured Products</NavLink>
        <NavLink to="all">All Products</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Products;
