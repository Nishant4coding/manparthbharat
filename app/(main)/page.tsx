"use client"



// const BubbleUnderlay = dynamic(
//   () => import("@/components/ui/BubbleUnderLay")
// );

import About from "@/components/About";
import {  Faqs } from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Wwa from "@/components/Wwa";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {


  const words = [
    
    {
      text: "Manparth Bharat",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
   <>

{/* <BubbleUnderlay
          className={clsx(
            "fixed",
            "top-0 left-0",
            "w-full h-full",
            "-z-10",
            "pointer-events-none",
            "select-none"
          )}
        /> */}
   <div className=" h-screen">
    {/* <BackgroundBeams/> */}
    
   {/* <Navbar/> */}
   <Hero/>
   <About/>
   <Faqs/>
   <Wwa/>
   <Footer/>
   </div>
   </>
  );
}
