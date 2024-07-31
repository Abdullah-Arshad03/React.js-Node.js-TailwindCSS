import React from "react";

const Hamburger = () => {
  return (
    <div class="hamburger-icon bg-white w-10 h-10 rounded-md flex flex-col justify-around items-center shadow">
      <div class="bg-black h-0.5 w-6 rounded-full"></div>
      <div class="bg-black h-0.5 w-4 rounded-full "></div>
      <div class="bg-black h-0.5 w-6 rounded-full"></div>
    </div>
  );
};

export default Hamburger;
