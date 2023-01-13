import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContextProvider";
function Home(props) {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuthContext();
  // const logoutHandler=()=>{
  //   logout();
  // }
  return (
    <>
      <h2>Home page</h2>
      <button onClick={() => navigate("/products")}>Products</button>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </>
  );
}
export default Home;
