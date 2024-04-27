"use client";

// const BubbleUnderlay = dynamic(
//   () => import("@/components/ui/BubbleUnderLay")
// );

import About from "@/components/About";
import { Faqs } from "@/components/Faqs";
import Footer from "@/components/Footer";
import Future from "@/components/Future";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Nav";
import Testimonial from "@/components/Testimonials";
import Wwa from "@/components/Wwa";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
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

  interface LinkProp {
    direction: string;
  }
  const Links = ({ direction }: LinkProp) => {
    return (
      <div
        className={`flex ${direction} justify-between gap-y-6 mt-16  ${
          direction === "row" ? "gap-x-6" : ""
        }`}
      >
        <a
          href="https://twitter.com/ecellgu?s=20&t=vFxkKJJOyuDxqgjbNkXRrQ"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img src={twitter} alt="twitter" className='w-5' /> */}
          <Twitter
            strokeWidth={2}
            className="group-hover:scale-125 hover:text-[#FF9900] text-white transition-transform duration-250 ease-in-out"
          />
        </a>
        <a
          href="https://www.instagram.com/ecellgu/"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img src={insta} alt="insta" className='w-5' /> */}
          {/* <Image src={logo} alt='logo' className='h-10'/> */}
          <Instagram
            strokeWidth={2}
            className="group-hover:scale-125 text-white hover:text-[#FF9900] transition-transform duration-250 ease-in-out"
          />
        </a>
        <a
          href="https://www.facebook.com/ecellgu "
          target="_blank"
          rel="noreferrer"
        >
          {/* <img src={facebook} alt="facebook" className='w-5' /> */}
          <Facebook
            strokeWidth={2}
            className="group-hover:scale-125 text-white hover:text-[#FF9900] transition-transform duration-250 ease-in-out"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/entrepreneurship-cell-galgotias-university/"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img src={linkedin} alt="linkedin" className='w-5' /> */}
          <Linkedin
            strokeWidth={2}
            className="group-hover:scale-125 text-white hover:text-[#FF9900] transition-transform duration-250 ease-in-out"
          />
        </a>
      </div>
    );
  };

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
      <div className=" ">
        <BackgroundBeams />
        <div className="">
          <div className="hidden sm:flex flex-row max-w-full ml-auto z-30">
            <div className="ontop fixed flex px-1 h- items-center justify-center right-0">
              <div className="flex flex-col justify-center gap-y-6 items-center ">
                <div className=" mt-40 uppercase text-sm font-semibold origin-center rotate-[-90deg] tracking-wide ">
                  {/* <h1 className="text-white">------------------</h1> */}
                </div>
                {/* <hr className="text-white h-20" /> */}
                <Links direction="flex-col" />
                <div className="mt-20 uppercase text-sm font-semibold origin-center rotate-[90deg] tracking-wide">
                  <h1 className="text-white hover:text-[#FF9900]">ManParth</h1>
                </div>
              </div>
            </div>
          </div>

          <Navbar />
          <Hero />
          <Wwa />
          {/* <About/> */}
          <Future/>
          <Mission />
          <Faqs />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </>
  );
}
