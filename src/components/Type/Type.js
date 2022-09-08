import React from "react";
import { data } from "../../constants";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Type = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 1], [0.2, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="app__type padding-section mt-[10px] phone:mt-[80px] "
    >
      <div className="relative ">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="app__type-data flex  flex-col phone:flex-row  
            justify-around  "
        >
          {data.data.type.map((item) => {
            return (
              <div
                className="app__type_cards flex laptop:flex-row  phone:flex-col"
                key={item.id}
              >
                <img src={item.imgb} className="w-75" />
                <div
                  className="absolute app__type-data_top laptop:mr-12
                text-left -top-12"
                >
                  <div className="" key={item.id}>
                    <img src={item.img} className="w-img h-img left-[100px] " />
                    <p className="text-xl mt-5  capitalize text-gray">
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
      </div>
    </motion.div>
  );
};

export default Type;
