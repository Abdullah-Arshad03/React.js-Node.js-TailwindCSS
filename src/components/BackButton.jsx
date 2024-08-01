import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="hamburger-icon bg-white w-10 h-10 rounded-md flex flex-col justify-around items-center shadow">
      <IoIosArrowRoundBack onClick={() => navigate("/products")} />
    </div>
  );
};

export default BackButton;
