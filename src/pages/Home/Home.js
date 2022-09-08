import React from "react";
import { Type, PostGallery, Buttons } from "../../components";

const Home = () => {
  return (
    <div className=" mt-4 pt-2">
      <PostGallery />
      <Buttons />
      <Type />
    </div>
  );
};

export default Home;
