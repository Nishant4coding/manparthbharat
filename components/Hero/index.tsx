import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { SparklesCore } from '../ui/sparkles'
import Image from 'next/image'

function Hero() {
  return (


    <div className=' justify-center items-center text-center'>
    <div className="h-[52rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "Manparth Bharat",
                2000,
                "मनपार्थ भारत",
                2000,
               
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              // style={{ fontSize: '2em' }}
              cursor={true}
              className=" text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF9900] to-[#B45700] lg:text-7xl md:text-5xl sm:text-7xl text-3xl font-bold relative"
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />

            
      <div className="w-auto h-40 mt-2 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B45700] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent h-px w-1/4" />
 
        {/* Core component */}
  
 
        {/* Radial Gradient to prevent sharp edges */}
     
        <div className='text-white w-full text-3xl mt-5 '>Empowering individuals for a brighter tomorrow.</div>
      </div>
      <Image src="./round.svg" alt='round' className='animate-spin'   style={{
              animationDuration: "5s",
            }}  width={150} height={150}/>
            
    </div>
      
      
    </div>
  )
}

export default Hero
