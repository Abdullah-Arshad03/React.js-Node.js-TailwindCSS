import React from "react";
import Hamburger from "./Hamburger";
import ProfileImage from "./ProfileImage";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Hamburger />
      <ProfileImage />
    </div>
  );
};

export default Header;
