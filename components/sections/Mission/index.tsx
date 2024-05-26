import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mission from '@/public/mission.png'
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Mission() {
 
  return (
    <section className="bg-[#292A2C] z-40 relative">
      <div
       
        className="lg:p-20 p-8  rounded-t-3xl "
        style={{
          backgroundImage: `url(${mission.src})`,
          backgroundSize: "cover",
          //   backgroundPosition: "center",
        }}
      >
        <div className="flex lg:flex-row flex-col gap-20">
          <div className="flex flex-col gap-10 lg:w-3/6">
          <motion.div
        initial={{
          opacity: 0,
          // filter: "blur(1rem)",
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          // filter: "blur(0rem)",
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }} className="flex flex-col gap-5">
              <div className="text-[#FF9900] font-bold lg:text-3xl text-2xl">
                Our Mission
              </div>
             
            
                 <div   className="text-white lg:text-xl text-sm text-justify"
                  >
                    At Manparth, our mission is to pioneer a paradigm shift in
                    education, fostering unity, compassion, and wisdom to
                    transcend the barriers of religion and culture. We are
                    dedicated to building a Gurukul education system that
                    nurtures the holistic development of students, instilling
                    in them moral values, critical thinking, and a deep sense
                    of responsibility towards humanity. Through our
                    transformative educational programs, we empower youth to
                    become visionary leaders who will propel Bharat towards
                    its destiny as a Vishwa Guru—a beacon of enlightenment
                    and harmony for the world.
                  </div>
                
              
            </motion.div>
            <motion.div
        initial={{
          opacity: 0,
          // filter: "blur(1rem)",
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          // filter: "blur(0rem)",
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }} className="flex flex-col gap-5">
              <div className="text-[#FF9900] font-bold lg:text-3xl text-2xl">
                Our Vision
              </div>
             
        
                  <div  className="text-white lg:text-xl text-sm lg:text-left text-justify">
                    Our vision at Manparth is to create a world where
                    education transcends boundaries, where individuals are
                    not defined by their religious or cultural affiliations
                    but by their shared humanity. We envision a network of
                    Gurukuls across the nation, each serving as a sanctuary
                    of knowledge and spiritual growth, where students from
                    diverse backgrounds come together to learn, innovate,
                    and inspire one another. By nurturing the next generation
                    of enlightened leaders, we aim to transform Bharat into a
                    Vishwa Guru—a global leader in knowledge, compassion, and
                    wisdom, guiding humanity towards a brighter and more
                    harmonious future.
                  </div>
          
            </motion.div>
          </div>
          <div className="text-[#FFD700] lg:text-7xl text-3xl text-right font-bold mt-auto ml-auto hidden">
            Our <span className="text-[#FF9900]">Mission</span> <br />
            and Vision
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default Mission;
