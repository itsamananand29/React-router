import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function login(user) {
    if (user.length > 0) {
      setIsLoggedIn(true);
      setUserName(user);
    }
  }
  function logout() {
    setIsLoggedIn(false);
    setUserName("");
  }
  return (
    <AuthContext.Provider value={{ userName, isLoggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
