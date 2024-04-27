import React from 'react';
import Marquee from "react-fast-marquee";

function Future() {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden uppercase -z-1000" >
         
      <div className="w-full fcc">
        <Marquee speed={150} pauseOnHover autoFill>
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">creative</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">design</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">ui/ux</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">marketing</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">motion</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">animation</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          <div className=" text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative">branding</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
        </Marquee>
      </div>
    </div>
  );
}

export default Future;
