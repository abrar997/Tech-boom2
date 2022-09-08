import React from "react";
import { data } from "../../constants";
import { motion, transform, useTransform, useViewportScroll } from "framer-motion";
const Buttons = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [6, 1], [0.2, 1]);
  return (
    <motion.div className="mt-4 pt-5" 
      style={{scale}}
    >
      <motion.div
        initial={{y:-250}}
        animate={{y:-10}}
        transition={{delay:0.2,type:"tween"}}
        className="flex mt-5 pt-5 justify-center items-center "
        style={{
          scaleY: scrollYProgress,
        }}
    >
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
      <p className="text-center text-3xl  mt-5  pt-4  leading-[50px] ">
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
