import React from "react";
import Cube from "../components/Cube";
import HomeText from "../components/HomeText";

const Home = () => {
  return (
    <div className="">
      {/* text && cube */}
      <div className="container bg-transparent mx-auto w-full h-[93vh] flex flex-col justify-start md:flex-row">
        <div className="h-[40%] mb-[45px] md:h-full w-full md:w-[50%] flex justify-center items-center">
          <HomeText />
        </div>
        <div className="w-full bg-transparent md:w-[50%] flex justify-center items-center">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export default Home;
