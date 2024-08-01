import React from "react";
import Greeting from "./components/Greeting";
import ProductsScreen from "./screens/ProductsScreen";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default App;
