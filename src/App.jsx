import React, { Component, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Loader from "./Loader";
import Products from "./Products";
import Featured from "./Feature";
import AllProducts from "./AllProducts";
import { Users } from "./Users";
import { Admin } from "./Admin";
import { User } from "./User";
import { PageNotFound } from "./PageNotFound";
import AuthContextProvider from "./AuthContextProvider";
import Login from "./Login";
const LazyHome = React.lazy(() => import("./Home"));
const LazyAbout = React.lazy(() => import("./About"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyHome />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<Loader />}>
                  <LazyAbout />
                </Suspense>
              }
            />
            <Route path="products" element={<Products />}>
              <Route path="featured" element={<Featured />} />
              <Route path="all" element={<AllProducts />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<User />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthContextProvider>
      </div>
    );
  }
}

export default App;
