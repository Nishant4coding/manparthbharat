import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { SparklesCore } from '../ui/sparkles'

function Hero() {
  return (


    <div className='h-screen justify-center items-center text-center '>
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
              className="text-teal-200 type lg:text-7xl md:text-5xl sm:text-7xl text-3xl font-bold relative"
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
      <div className="w-[40rem] h-40 mt-2 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      
      
    </div>
  )
}

export default Hero
