import React from "react";
import { images, icons } from "../../constants";

const Navbar = () => {
  return (
    <div className="flex justify-between padding-section shadow-lg">
      <div className="font-bold italic text-2xl"> IDEO </div>
      <div className="font-bold italic w-25">
        <img src={images.logo1} />
      </div>
      <div className="font-bold italic">
        <icons.AiOutlineMenu fontSize={22} />
      </div>
    </div>
  );
};

export default Navbar;
