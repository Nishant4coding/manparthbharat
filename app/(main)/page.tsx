"use client"

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
   <div className="bg-black h-screen">
    <BackgroundBeams/>
    
   <Navbar/>
   <Hero/>
   <Footer/>
   </div>
   </>
  );
}
