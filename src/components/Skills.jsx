import React, { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {

  return (
    <div id="skills" className="text-white h-[100vh] container mx-auto w-full flex justify-center items-center">
      <div className="">
        {/* text */}
        <div>
          <motion.h1
            initial={{y:200,opacity:0}}
            transition={{
              type: "spring",
              mass: 3.5,
              damping: 12,
              duration: 1.5,
              delay: 1,
            }}
            whileInView={{y:0,opacity:1}}
            className="flex underline bg-transparent text-purple-500 text-[25px] md:text-[40px] w-full font-extrabold justify-center items-center mt-[10px] mb-[20px]"
          >
            Skills
          </motion.h1>
        </div>
        {/* skills */}
        <div className=" flex justify-center items-center flex-wrap gap-[20px] mt-[50px] md:gap-[35px] ">
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-fnWuOiS7meBrmSiAfacCBpTRKeLW9g20A&s"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://i.pinimg.com/736x/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.jpg"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
              alt="..."
              className="rounded-[30%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpzzD4YiSWcN-zBdaKvNjIzCTmy1rlUdkXgsoOIlWsz8t2M7RuczqQWiya7p5kyloMaU&usqp=CAU"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png"
              alt="..."
              className="rounded-[50%] bg-white w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*S_phGzoPMWgQFCaD6iTFIg.jpeg"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://img.icons8.com/color/512/bootstrap.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/redux-9305892-7694091.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://www.pngfind.com/pngs/m/437-4374262_es6-revealed-a-new-world-of-javascript-ecmascript.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--open-source-framework-code-logos-and-brands-pack-icons-9325303.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/012/302/987/small_2x/stylized-3d-html-logo-side-view-png.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/011/665/094/small_2x/stylized-3d-css-icon-side-view-free-png.png"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABlHaGEyLWoCcez1o33oiglJY3sy-z794bgIeNDXzHIca0pjnbtf3YIPTQDMiuYbTiPs&usqp=CAU"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-github-159-721954.png?f=webp"
              alt="..."
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
          <div class="square w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px xl:h-[100px]">
            <img
              src="https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png"
              alt="..."
              // className="w-[87%] h-[87%] bg-transparent rounded-[50%]"
              className="rounded-[50%] bg-transparent w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

{
  /* <div class="square"><img src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x1234-85gmuivx.png" alt="..." /></div> */
}
{
  /* <div class="square"><img src="https://e7.pngegg.com/pngimages/162/702/png-clipart-socket-io-node-js-express-js-npm-network-socket-github-angle-triangle.png" alt="..." /></div> */
}

// https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1