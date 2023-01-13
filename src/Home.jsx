import React from "react";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate();
  return (
    <>
      <h2>Home page</h2>
      <button onClick={() => navigate("/products")}>Products</button>
    </>
  );
}
export default Home;
