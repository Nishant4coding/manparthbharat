import React from 'react';
import Marquee from "react-fast-marquee";

function Future() {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden uppercase bg-[#292A2C] relative">
      <div className="w-full fcc">
        <Marquee speed={150} pauseOnHover autoFill>
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">creative</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">design</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">ui/ux</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">marketing</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">motion</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">animation</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="text-3xl m-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFD700] font-extrabold p-1 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">branding</div>
          <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
        </Marquee>
      </div>
    </div>
  );
}

export default Future;
