import React from "react";
import { projects } from "../assets/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  // projectParentVariants
  const projectParentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  // projectVariants
  const projectVariants = {
    hidden: {
      y: -800,
      rotateX: 360,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
    },
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center">
      <h1 className="h-[10vh] flex items-end text-purple-500 underline font-extrabold text-xl md:text-2xl">
        Projects
      </h1>
      <motion.div
        variants={projectParentVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={{
          duration: 5,
        }}
        className="mt-[30px]  container mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center gap-[15px]"
      >
        {projects.map((project, index) => (
          <motion.div
            variants={projectVariants}
            transition={{
              type: "spring",
              mass: 10,
              damping: 32,
              duration: 8,
            }}
            whileHover={{
              scale: 0.95,
              rotateZ: 2,
            }}
            className="rounded-xl overflow-hidden md:w-[25%] w-[50%] h-[225px] shadow-xl border-2 border-white"
            key={index}
          >
            <Link
              to={`/details/${project.id}`}
              className="rounded-xl bg-transparent"
            >
              <motion.img
                src={project.picture}
                className="bg-transparent w-full rounded-xl h-[80%]"
                alt="..."
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 1,
                  },
                }}
              />
            </Link>
            <div className="rounded-br-xl rounded-bl-xl bg-black opacity-60 h-[50px] py-[10px] text-white font-extrabold text-center">
              {project.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
