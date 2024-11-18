import React from "react";
import { motion } from "framer-motion";

const HomeText = () => {
  const text1 = "Hi,I'm";
  const text3 = "i'm a web developer.. I build integrated and responsive web applications using different tools..";

  const parentText1Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const parentText2Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay : 0.5
      },
    },
  };

  const charVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const wasimParentVariant = {
    hidden: {
      opacity: 0,
      y: -300,
      rotate: 360,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
    },
  };

  return (
    <div className="rounded-xl bg-transparent shadow-xl text-white px-[10px] sm:p-[10px]">
      <motion.h1
        variants={parentText1Variant}
        initial={"hidden"}
        animate={"visible"}
        className="sm:text-[30px] text-[25px] bg-transparent flex  font-extrabold md:text-[45px]"
      >
        {/* text1 */}
        {text1.split(" ").map((char, index) => (
          <motion.span className="bg-transparent" 
          variants={charVariant} 
          key={index}>
            {char}
          </motion.span>
        ))}
        {/* WASIM */}
        <motion.h2
          variants={wasimParentVariant}
          initial={"hidden"}
          animate={"visible"}
          transition={{
            type: "spring",
            mass: 3.5,
            damping: 23,
            duration: 2,
            delay:1
          }}
          className="text-purple-500 bg-transparent ml-[15px]"
        >
          WASIM
        </motion.h2>
      </motion.h1>
      {/* text3 */}
      <motion.p
        variants={parentText2Variant}
        transition={{ delay:1 , duration:3 }}
        initial={"hidden"}
        animate={"visible"}
        className="sm:text-[20px] text-[15px] bg-black rounded-xl  font-bold md:text-[25px] px-[15px] rounded-br-xl rounded-bl-xl"
      >
        {text3.split("").map((char, index) => (
          <motion.span
            variants={charVariant}
            key={index}
            className="bg-transparent"
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default HomeText;
