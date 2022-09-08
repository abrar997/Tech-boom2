import React from "react";
import { data } from "../../constants";
import "./type.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Type = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 1], [0.2, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="app__type padding-section pb-[100px]">
      <div className="relative ">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="app__type-data flex  ml-5 justify-around items-center "
        >
          {data.data.type.map((item) => {
            return (
              <div className="mr-9  app__type_cards  flex flex-row-reverse sm:flex-col-1" key={item.id}>
                <img src={item.imgb} className="w-75  m-auto opacity-80	 " />
                <div className="absolute app__type-data_top  mr-9 text-left -top-12">
                  <div className=" mr-9" key={item.id}>
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
