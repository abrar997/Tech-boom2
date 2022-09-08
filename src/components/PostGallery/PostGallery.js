import React from "react";
import { images } from "../../constants";

const PostGallery = () => {

  return (
    <section className=" top-10 laptop:top-10 mx-auto h-70  laptop:h-90 ">
      {/* below img with z-index=0  for beach */}
      <div className="relative">
        <div className=" absolute beach z-0  laptop:left-[30px] h-40 phone:left-0 ">
          <img src={images.beach} />
        </div>
        {/* children large img  */}
        <div className="absolute right-0 left-0 top-[40px] z-1">
          <img
            src={images.children}
            className="w-100 image laptop:h-[630px] phone:h-[300px] "
          />
        </div>
        {/* start left box */}

        <div
          className="absolute left-[13px] top-[90px] laptop:left-[140px] laptop:top-[150px]
          z-2"
        >
          <img src={images.border} className="w-40 laptop:w-40 phone:w-25" />
        </div>
        <div
          className="absolute left-[20px] top-[95px]  laptop:left-[140px] laptop:top-[140px]
          z-3 "
        >
          <img src={images.logo} className="w-40 laptop:w-40 phone:w-25" />
        </div>

        {/* start right with  box */}
        <div
          className="absolute top-[320px] -right-[60px] laptop:right-20 laptop:top-[400px] phone:top[10px]
          rotate-[120deg] z-3"
        >
          <img src={images.arrow} className="w-40 laptop:w-60" />
        </div>
        <div className="absolute  -right-[250px]   top-[310px] laptop:right-40   laptop:top-[550px] phone:top[-80px]  z-3">
          <img src={images.bag} className="w-30 laptop:w-60 " />
        </div>
      </div>

    </section>
  );
};

export default PostGallery;
