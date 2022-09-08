import React from "react";
import { images } from "../../constants";
const PostGallery = () => {
  return (
    <div className="relative top-10 h-100">
      {/* below img with z-index=0  for beach */}
      <div className=" absolute z-0 -top-10 left-[30px] ">
        <img src={images.beach} className="w-[900px] " />
      </div>
      {/* children large img  */}
      <div className="absolute right-0 left-0 top-[40px] z-1">
        <img src={images.children} className="w-100 image" />
      </div>
      {/* start left box */}
      <div className="absolute left-[140px] top-[150px] z-2 ">
        <img src={images.border} className="w-40 " />
      </div>
      <div className="absolute  left-[140px] top-[140px] z-3 ">
        <img src={images.logo} className="w-40 " />
      </div>
      {/* start right with  box */}
      <div className="absolute  right-20 top-[350px] rotate-[120deg] z-3">
        <img src={images.arrow} className="w-60" />
      </div>
      <div className="absolute  right-40 top-[510px]  z-3">
        <img src={images.bag} className="w-60 " />
      </div>
    </div>
  );
};

export default PostGallery;
