import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";


const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  //   variants
  // div-Variants
  const divVariant = {
    hidden: {
      y: -1000,
    },
    visible: {
      y: 0,
    },
  };
  // profile-variants
  const profileVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  // side-variants
  const sideVariants = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  // link-Variants
  const linkVariants = {
    hidden: {
      y: -1000,
      rotate: 360,
    },
    visible: {
      y: 0,
      rotate: 0,
    },
  };
  return (
    <div className="">
      <div
        className="absolute z-[51] bg-transparent top-[20px] left-[20px] cursor-pointer"
        onClick={() => {
          setShowNavBar(!showNavBar);
        }}
      >
        {
        showNavBar ? (<IoClose className="w-[40px] h-[40px] text-purple-700 bg-transparent"/>) : (<TiThMenu className="w-[35px] h-[35px] text-purple-700 bg-transparent" />)
        }
      </div>
      {/* {showNavBar ? ( */}
      {showNavBar ? (
        <nav className="absolute top-0 left-0 w-full h-[100vh] flex justify-between">
          {/* Home */}
          <motion.div
            variants={sideVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1.5, delay: 0 }}
            className="z-50 flex flex-2 bg-white items-center justify-center w-[40%] sm:w-[26%] text-center"
          >
            <motion.div
            className="bg-transparent "
              variants={sideVariants}
              transition={{ duration: 1.5, delay: 1.7 }}
            >
              <Link
                to="/"
                onClick={() => setShowNavBar(false)}
                className="text-purple-700 font-bold text-[35px] bg-transparent"
              >
                <AiFillHome className="bg-transparent text-purple-950"/>
              </Link>
            </motion.div>
          </motion.div>
          {/* Skills */}
          <motion.div
            variants={divVariant}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="z-50 bg-purple-950 text-white flex font-bold items-center justify-center w-[25%] md:w-[16%] text-center"
          >
            <motion.div
              className="bg-transparent"
              variants={linkVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                type: "spring",
                mass: 3.5,
                damping: 17,
                duration: 2,
                delay: 1,
              }}
            >
              <Link
                className="bg-transparent"
                onClick={() => {
                  setShowNavBar(false);
                }}
                to="/skills"
              >
                Skills
              </Link>
            </motion.div>
          </motion.div>
          {/* projects */}
          <motion.div
            variants={divVariant}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1.5, delay: 0.9 }}
            className="z-50 flex font-bold bg-purple-950 text-purple-500 items-center justify-center w-[25%] md:w-[16%] text-center"
          >
            <motion.div
              className="bg-transparent"
              variants={linkVariants}
              transition={{
                type: "spring",
                mass: 3.5,
                damping: 17,
                duration: 2,
                delay: 1.6,
              }}
            >
              <Link onClick={()=>setShowNavBar(false)} className="bg-transparent text-white" to="/projects">
                Projects
              </Link>
            </motion.div>
          </motion.div>
          {/* contact */}
          <motion.div
            variants={divVariant}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="z-50 flex font-bold bg-purple-950 text-purple-500 items-center justify-center w-[25%] md:w-[16%] text-center"
          >
            <motion.div
              className="bg-transparent"
              variants={linkVariants}
              transition={{
                type: "spring",
                mass: 3.5,
                damping: 17,
                duration: 2,
                delay: 1.9,
              }}
            >
              <Link
                className="bg-transparent text-white"
                to="/contact"
                onClick={() => setShowNavBar(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
          {/* profile */}
          <motion.div 
            variants={divVariant}
            // variants={sideVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 2, delay: 1.5 }}
            className="z-50 bg-purple-700 flex-2 font-bold text-purple-500 flex items-center justify-center w-[20%] sm:w-[40%] md:w-[26%] text-center"
          >
          </motion.div>
        </nav>
      // ) : (
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
