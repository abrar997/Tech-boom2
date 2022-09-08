import React from "react";
import { data } from "../../constants";
import { motion } from "framer-motion";

const Buttons = () => {
  return (
    <motion.div className=" laptop:mt-[75px] ">
      {/* buttons */}
      {data.data.buttons.map((item) => {
        return (
          <button
            key={item.id}
            className=" border m-4 p-4 font-bold text-lg laptop:text-xl text-gray hover:text-dark rounded-sm	 "
          >
            {item.link}
          </button>
        );
      })}
      {/* text */}
      <p className="text-center  laptop:text-3xl phone:text-lg laptop:mt-5 phone:mt-10  laptop:leading-[60px] ">
        The solutions, systems, experiences, and relationships that reflect
        <br />
        <a href="H" className=" border-b  text-dark hover:bg-gray">
          how we’re designing responsibly.
        </a>
      </p>
    </motion.div>
  );
};

export default Buttons;
