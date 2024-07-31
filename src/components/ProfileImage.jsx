import React from "react";

const ProfileImage = () => {
  return (
    <>
      <div className="rounded-full overflow-hidden w-14 h-14 border border-black">
        <img
          src="../../public/profileImage/Sin título-1.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default ProfileImage;
