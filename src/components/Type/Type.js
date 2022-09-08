import React from "react";
import { data } from "../../constants";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Type = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 1], [0.2, 1]);

  return (
    <motion.div
      style={{ scale }}
      className=" app__type padding-section h-90 mt-[10px] "
    >
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
        className=" app__type-data relative flex flex-col mt-0 laptop:mt-[100px]  laptop:flex-row phone:flex-col "
      >
        
        {data.data.type.map((item) => { 
          return (
            <div key={item.id} className='flex flex-col laptop:flex-row '>
              <img src={item.imgb} className="w-75 phone:-top-[10px]  invisible laptop:visible" />
              <div
                className="absolute z-7 app__type-data_top 
                text-left -top-5"
              >
                <div className="" key={item.id}>
                  <img
                    src={item.img}
                    className="w-img h-img"
                  />
                  <p className="text-xl mt-5 capitalize text-gray">
                    {item.link}
                  </p>
                  <p className="text-l mt-3 text-black">{item.name} </p>
                  <button className="border hover:text-black mt-3 p-3 text-gray px-2 w-10 rounded-sm">
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        
      </motion.div>
    </motion.div>
  );
};

export default Type;
