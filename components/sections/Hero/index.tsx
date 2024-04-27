import React from "react";
import { TypeAnimation } from "react-type-animation";
import { SparklesCore } from "@/components/ui/sparkles"
import Image from "next/image";

function Hero() {
  return (
    <div className=" justify-center items-center text-center">
      {/* <div className="relative w-full z-20">
       
        <div className="absolute top-0 right-0 lg:w-96 w-40 lg:h-96 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100 pointer-events-none"></div>
        <div className="absolute lg:top-[80vh] top-[65vh] left-0 lg:w-80 w-40 lg:h-80 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>
      </div> */}
      <div className="h-[52rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={["Manparth", 2000, "मनपार्थ", 2000]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          // style={{ fontSize: '2em' }}
          cursor={true}
          className=" text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF9900] to-[#B45700] lg:text-7xl md:text-5xl sm:text-7xl text-5xl font-bold relative"
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        <div className="w-auto justify-center items-center text-center h-40 mt-2 relative">
          {/* Gradients */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent h-px w-3/4" />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-[#B45700] to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent h-px w-1/4" />

          {/* Core component */}

          {/* Radial Gradient to prevent sharp edges */}

          <div className="text-white w-full lg:text-3xl text-xl mt-5 p-2 font-bold">
            Empowering individuals for a brighter tomorrow.
          </div>
        </div>
        <Image
          src="./round.svg"
          alt="round"
          className="animate-spin"
          style={{
            animationDuration: "5s",
          }}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

export default Hero;
