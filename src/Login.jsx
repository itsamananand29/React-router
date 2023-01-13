import React, { useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const authContext = useAuthContext();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const clickHandler = () => {
    authContext.login(user);
    user.length && navigate("/");
  };
  return (
    <>
      <label>User Name</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={clickHandler}>Login</button>
    </>
  );
}
export default Login;
