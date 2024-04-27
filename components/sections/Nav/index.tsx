import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Navlinks from "./Navlinks";
import logo from "@/public/mlogo.png";

function Navbar() {
  return (
    <nav className=" fixed top-0 w-full z-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse "
        >
          <Image src={logo} className="w-10 lg:w-20 lg:h-20 h-10" alt="Logo" />
          <span className="self-center lg:text-5xl text-xl font-semibold whitespace-nowrap text-white">
            Manparth
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto "
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white "
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a href="#" className="block py-2 px-3 text-white rounded ">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
