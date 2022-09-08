import React from "react";
import { data } from "../../constants";
import { motion } from "framer-motion";

const Buttons = () => {
  return (
    <motion.div>
      <motion.div>
        {/* buttons */}
        {data.data.buttons.map((item) => {
          return (
            <button
              key={item.id}
              className=" border m-4 p-4 font-bold text-xl text-gray hover:text-dark rounded-sm	 "
            >
              {item.link}
            </button>
          );
        })}
      </motion.div>
      {/* text */}
      <p className="text-center  laptop:text-3xl phone:text-lg  leading-[50px] ">
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
