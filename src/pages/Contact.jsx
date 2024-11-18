import React, { useState } from "react";
import { TfiGithub } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import mailjs from '@emailjs/browser'
import Swal from "sweetalert2";

const Contact = () => {

  const [ name , setName ] = useState("")
  const [ email , setEmail ] = useState("")
  const [ message , setMessage ] = useState("")
  const [ loading , setLoading ] = useState(false)

  const handelNameChange = (e)=>{
    setName(e.target.value)
  }

  const handelEmailChange = (e)=>{
    setEmail(e.target.value)
  }

  const handelMessageChange = (e)=>{
    setMessage(e.target.value)
  }

  // handel Form
  const handelForm = (e)=>{
    e.preventDefault();
    setLoading(true)
    mailjs.send(
      'service_qic20cl',
      'template_72ky97f',
      {
        from_name : name ,
        to_name : 'Wasim daoud' ,
        from_email : email ,
        to_email : 'wasimdaoud05@gmail.com' ,
        message : message
      },
      'sPNZRr0epxicVR9Kq'
    ).then(()=>{
      setLoading(false)
      Swal.fire({
        title: "Thank you..",
        text: "I will get back to you as soon as possible. ",
        icon: "success"
      });
      setName("")
      setEmail("")
      setMessage("")
    },(error)=>{
      setLoading(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log({error})
    })
  }
  // fromLeftVariants
  const fromLeftVariants = {
    hidden: {
      x: -300,
      scale: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };

  // fromRightVariants
  const fromRightVariants = {
    hidden: {
      x: +300,
      scale: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  // fromRightVariants
  const fromTopVariants = {
    hidden: {
      y: -900,
      scale: 0,
      rotateX: 360,
    },
    visible: {
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 2,
        delay:1
      },
    },
  };

  return (
    <div className="container overflow-hidden h-[100vh] mx-auto">
      <div className="flex justify-center items-center h-[100vh]">
        <form 
        onSubmit={handelForm}
        className="w-[90%] md:w-[60%] h-[90vh] flex flex-col items-center justify-between rounded-xl bg-black opacity-80 border-2 border-purple-500">
          <h1 className="text-white mt-[10px] font-bold">GET IN TOUCH</h1>
          <motion.div
            variants={fromLeftVariants}
            initial={"hidden"}
            animate={"visible"}
            className="w-[80%] flex flex-col gap-[5px] justify-center text-white"
          >
            <h1>Your Name</h1>
            <input
              type="text"
              value={name}
              placeholder="Please Enter your name"
              onChange={handelNameChange}
              className="py-[5px] px-[10px] bg-black border-[1px] rounded-lg outline-none border-purple-500"
            />
          </motion.div>
          <motion.div
            variants={fromRightVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              delay: 1,
            }}
            className="w-[80%] flex flex-col gap-[5px] justify-center text-white"
          >
            <h1 className="px-[10px]">Your Email</h1>
            <input
              type="text"
              value={email}
              placeholder="Please Enter your Email"
              onChange={handelEmailChange}
              className="py-[5px] px-[10px] bg-black border-[1px] rounded-lg outline-none border-purple-500"
            />
          </motion.div>
          <motion.textarea
            variants={fromTopVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              delay: 2.5,
            }}
            placeholder="Email me.."
            value={message}
            onChange={handelMessageChange}
            className="w-[80%] h-[40%] py-[5px] px-[10px] bg-black text-white border-[1px] rounded-lg outline-none border-purple-500"
          ></motion.textarea>
          <motion.div
            variants={fromRightVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              delay:3
            }}
            className="flex w-[80%] justify-between items-center"
          >
            <button
              className="flex justify-center items-center gap-[5px] py-[3px] mr-auto px-[10px] text-purple-500 cursor-pointer border-[1px] border-purple-500 rounded-lg"
              type="submit"
            >
              <SiGmail />
              {
                loading ? "Loading..." : "Send"
              }
            </button>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wasim-daoud/"
              className="text-blue-500"
            >
              <BsLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/Wasim9Daoud"
              className="text-xl ml-[30px] text-blue-500"
            >
              <TfiGithub />
            </a>
          </motion.div>
          <motion.div
            variants={fromLeftVariants}
            initial={"hidden"}
            animate={"visible"}
            className="flex md:gap-[20px] gap-[5px] text-white sm:w-[80%] w-[95%] mb-[10px] justify-between items-center"
          >
            <div className=" text-purple-950 flex items-center shadow-md gap-[10px]">
              <SiGmail />
              <span className="text-white">wasimdaoud05@gmail.com</span>
            </div>
            <div className="text-white">096-995510238</div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// template_40xfr2a
// service-id     service_qic20cl
// key    sPNZRr0epxicVR9Kq