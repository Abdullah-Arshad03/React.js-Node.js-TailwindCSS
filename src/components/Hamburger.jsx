import React from "react";

const Hamburger = () => {
  return (
    <div className="hamburger-icon bg-white w-12 h-12 rounded-lg flex flex-col justify-around pl-2 p-2 shadow">
      <div className="bg-black h-0.5 w-6 rounded-full"></div>
      <div className="bg-black h-0.5 w-4 rounded-full "></div>
      <div className="bg-black h-0.5 w-6 rounded-full"></div>
    </div>
  );
};

export default Hamburger;
