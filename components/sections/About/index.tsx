import Image from "next/image";
import React from "react";
import about from "../../public/gurukul.png";

function About() {
  return (
    <div className="bg-black text-white lg:p-20 p-5  ">
      <h1 className="text-center font-bold text-5xl mb-20">About Us</h1>
      <div className="flex lg:flex-row flex-col gap-20">
        <Image src={about} alt="about section" />
        <div>
          <h2 className="mb-2 text-3xl font-semibold text-yellow-300">
            Manparth Bharat
          </h2>
          <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-top">
              <svg
                className="w-3.5 h-3.5 me-2 text-yellow-300 dark:text-yellow-300 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Manparth Bharat is a pioneering startup founded by Shivansh
              Srivastav in the field of ED-TECH and Religious Duality. With a
              strong focus on the module of ODOG (One District One Gurukul), the
              company is dedicated to transforming Bharat into a world guru.
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-yellow-300 dark:text-yellow-300 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {/* At least one lowercase character */}
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {/* At least one special character, e.g., ! @ # ? */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
