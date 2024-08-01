import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductsScreen from "./screens/ProductsScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductDetailScreen from "./screens/ProductDetailScreen.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/products/:brandName" element={<ProductDetailScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
