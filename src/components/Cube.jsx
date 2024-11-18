import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const Cube = () => {
  // cube Variants
  const cubeVariants = {
    hidden: {
      y: -40,
    },
    visible: {
      y: 40,
    },
  };
  // cube Shadow Variants
  const cubeShadowVariants = {
    hidden: {
      scale: 1,
      opacity: 0.2,
    },
    visible: {
      scale: 0.75,
      opacity: 0.5,
    },
  };
  return (
    // cube container
    <div className="relative bg-transparent">
      <motion.div
        variants={cubeVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      >
        {/* cube */}
        <div className="cube bg-transparent md:top-[-100px]">
          <div className="face front"><img src="https://ih1.redbubble.net/image.241202237.4263/st,small,507x507-pad,600x600,f8f8f8.u28.jpg" className="bg-white" /></div>
          <div className="face back"><img src="https://d13vhgz95ul9hy.cloudfront.net/blog/wp-content/uploads/2018/04/socket.io_.png" className="h-[100%] w-[100%]" /></div>
          <div className="face left"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8msSdkuY3G81WM_FIzMhJi66jj1bXmAgyw&s" className="bg-white" /></div>
          <div className="face right"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIa2GjsExd_GZmrCCI1G2ZJ6rGLQZoMa4WA&s" className="bg-white" /></div>
          <div className="face top"><img src="https://quintagroup.com/cms/js/js-image/javascript-logo.png" className="bg-white" /></div>
          <div className="face bottom"><img src="https://ih1.redbubble.net/image.5241583874.6759/st,small,507x507-pad,600x600,f8f8f8.jpg" className="bg-white" /></div>
        </div>
      </motion.div>
      {/* cube shadow */}
      <motion.div
        variants={cubeShadowVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          delay: 3,
        }}
        // class="cube-container"
        className="cubeShadow absolute top-[300px] md:top-[225px] shadow-xl"
      ></motion.div>
    </div>
  );
};

export default Cube;
