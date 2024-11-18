import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";

const Details = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  // picture-variants
  const pictureVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  // skills-used variants
  const skillsUsedVariants = {
    hidden: {
      y: -800,
      rotate: 360,
    },
    visible: {
      y: 0,
      rotate: 0,
    },
  };

  // charParentVariants
  const charParentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // charChildVariants
  const charChildVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="container p-[10px] sm:p-0 mx-auto h-[100vh] w-full flex justify-center items-center flex-col">
      {/* picture && techs-used && Links */}
      <div className="w-full sm:h-[60%] h-[75%] flex flex-col gap-[15px] md:flex-row justify-center items-center rounded-2xl">
        {/* picture && project-title*/}
        <motion.div
          variants={pictureVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 4, type: "spring" }}
          className=" w-[70%] h-[40%] md:h-[80%] md:w-[100%] rounded-2xl"
        >
          {/* picture */}
          <div className="w-full h-[100%] flex justify-center items-center rounded-2xl">
            <img
              className="w-full h-full rounded-2xl"
              src={project.picture}
              alt="..."
            />
          </div>
          {/* project-title */}
          <div className="w-full  flex justify-center items-center">
            <span className="underline text-purple-500 font-extrabold text-lg sm:text-xl md:text-2xl">
              {project?.title}
            </span>
            <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold flex ml-[10px] no-underline">
              ({project.type})
            </span>
          </div>
        </motion.div>
        {/* techs-used && Links */}
        <div className="w-[100%] mt-[20px] sm:mt-[10px] md:mt-0 h-[50%] md:h-[80%] md:w-[100%] flex flex-col justify-start  items-between">
          {/* Links */}
          <div className="flex flex-col bg-black opacity-60 rounded-xl justify-center items-start h-[50%] w-full text-white">
            {/* video link && icon */}
            <motion.div
              variants={pictureVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                type: "spring",
                delay: 3,
                duration: 2,
              }}
              className="flex border-b-2 border-purple-500 justify-center items-center gap-[10px] w-full min-h-[33.3%]"
            >
              {/* icon */}
              <div className=" rounded-2xl">
                <img
                  className="max-w-[40px] max-h-[40px] rounded-2xl"
                  src={project?.video.icon}
                  alt="..."
                />
              </div>
              {/* link */}
              <div className="w-[80%] bg-transparent">
                <a
                  target="_blank"
                  href={project?.video.link}
                  className="bg-transparent md:text-[17px] text-[12px]"
                >
                  Tap to watch a video about the project capabilities{" "}
                </a>
              </div>
            </motion.div>
            {/* github link && icon */}
            <motion.div
              variants={pictureVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                type: "spring",
                duration: 2,
                delay: 3.5,
              }}
              className="flex justify-center items-center gap-[10px] border-b-2 border-purple-500 w-full min-h-[33.3%]"
            >
              {/* icon */}
              <div className="rounded-2xl">
                <img
                  className="max-w-[40px] max-h-[40px] rounded-2xl"
                  src={project?.github.icon}
                  alt="..."
                />
              </div>
              {/* link */}
              <div className="w-[80%] bg-transparent">
                <a
                  target="_blank"
                  href={project?.github.link}
                  className="bg-transparent md:text-[17px] text-[12px]"
                >
                  Tap to watch the code on GitHub{" "}
                </a>
              </div>
            </motion.div>
            {/* demo link && icon */}
            {project?.demo ? (
              <motion.div
                variants={pictureVariants}
                initial={"hidden"}
                animate={"visible"}
                transition={{
                  type: "spring",
                  duration: 2,
                  delay: 4,
                }}
                className="flex justify-center items-center gap-[10px] w-full min-h-[33.3%]"
              >
                {/* icon */}
                <div className="rounded-2xl">
                  <img
                    className="max-w-[40px] max-h-[40px] rounded-2xl"
                    src={project?.demo.icon}
                    alt="..."
                  />
                </div>
                {/* link */}
                <div className="w-[80%] bg-transparent">
                  <a
                    target="_blank"
                    href={project?.demo.link}
                    className="bg-transparent md:text-[17px] text-[12px]"
                  >
                    {`Tap to watch live demo for ${project.title} App`}
                  </a>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </div>
          {/* techs-used */}
          <div className="flex max-h-[40%] flex-col justify-between items-center">
            <div className="text-purple-500 font-extrabold sm:text-xl text-lg md:text-2xl sm:mt-[15px] underline">
              Skills Used
            </div>
            {/* skills */}
            <div className="flex justify-center mt-[20px] items-center gap-[15px] h-[50%] w-full">
              {project?.skillsUsed.map((skill, index) => (
                <motion.div
                  variants={skillsUsedVariants}
                  initial={"hidden"}
                  animate={"visible"}
                  transition={{
                    type: "spring",
                    mass: 3.5,
                    damping: 22,
                    duration: 2,
                    delay: 5,
                  }}
                  key={index}
                  className="w-[80px] rounded-[50%] h-[80px]"
                >
                  <img
                    className="bg-white md:w-[70px] w-[60px] h-[60px] md:h-[70px] rounded-[50%]"
                    src={skill}
                    alt="..."
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <motion.div
        variants={charParentVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={{
          duration: 4,
        }}
        className="w-[100%] sm:max-h-[30%] max-h-[20%] bg-black opacity-80 overflow-y-auto rounded-2xl p-[20px]  border-2 gap-[10px] border-purple-500 text-white mb-[15px] h-full flex justify-center items-center md:text-[20px] sm:text-[15px] text-[12px] flex-wrap"
      >
        {project?.description.split(" ").map((word, index) => (
          <motion.div
            variants={charChildVariants}
            transition={{ duration: 1 }}
            key={index}
          >
            {word}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Details;
