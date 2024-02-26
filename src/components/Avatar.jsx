import React, { useState } from "react";
import avatar from "../assets/avatar.svg";
import profilePic from "../assets/profilePic.jpg";

const Avatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className="py-3 mt-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered ? profilePic : avatar}
        alt="avatar"
        className={`w-60 h-60 md:w-60 md:h-60 object-cover object-top bg-gradient-to-br from-red-400 to-purple-500 rounded-full ${
          isHovered ? "hovered" : ""
        }`}
      />
    </div>
  );
};

export default Avatar;
