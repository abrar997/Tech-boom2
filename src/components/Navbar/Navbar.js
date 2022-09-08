import React from "react";
import { images, icons } from "../../constants";

const Navbar = () => {
  return (
    <div className="app__navbar flex justify-between padding-section shadow-lg">
      <div className="font-bold italic text-2xl  "> IDEO </div>
      <div className="font-bold  inline laptop:inline md:hidden  w-25 laptop:w-25 phone:w-40  ">
        <img src={images.logo1} className="" />
      </div>
      <div className="font-bold ">
        <icons.AiOutlineMenu fontSize={22} />
      </div>
    </div>
  );
};

export default Navbar;
