import React from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

const HomeScreen = () => {
  useEffect(() => {
    redirect("/products");
  }, []);
  return <div>HomeScreen</div>;
};

export default HomeScreen;
