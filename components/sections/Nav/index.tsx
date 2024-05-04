import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { HamburgerOnMobile } from "./Hamberger";
import NavLinks from "./Navlinks";
import logo from "@/public/mlogo.png";

function Nav() {
  return (
    <div className="fc fcc w-full z-10000000 fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="fr fcb md:w-[90%] w-[95%] z-50">
        <div className="fr">
          <Image
            className="w-16 h-16 backdrop-blur-md"
            alt="main logo"
            src={logo}
            width={100}
            height={100}
            priority
          />
          <span className="text-white fcb text-2xl font-bold">MANPARTH</span>
        </div>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="text-xl cursor-pointer ">
          <Link
            target="_blank"
            href="https://calendly.com/tusharasthana2002/free-consultation"
          >
            <div className="text-white bg-clip-text hidden md:block">
              CONSULT NOW
            </div>
          </Link>
          <div className="w-fit md:hidden fc">
            <Suspense>
              <HamburgerOnMobile />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
