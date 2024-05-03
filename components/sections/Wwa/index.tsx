import Line from '@/components/custom/Line'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Wwa() {
  return (
    <div className='text-[#FFD700] lg:pl-20 lg:pr-20 p-5 flex lg:flex-row flex-col bg-black lg:gap-32 gap-10'>
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(1rem)",
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0rem)",
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}className='flex flex-col lg:w-2/5 gap-10'>
        <div className='text-[#FFD700] lg:text-6xl text-5xl font-bold'>
            Get to <span className='text-[#FF9900]'>Know</span> Better
        </div>
        <div className='text-white text-justify lg:text-xl text-md '>
        At Manparth, we are driven by a vision of fostering unity, wisdom, and enlightenment in society. Founded on the principles of humanity over religion, we believe in the power of education to transcend boundaries and create a harmonious world. Our mission is to redefine traditional paradigms and cultivate a holistic approach to learning that nurtures the mind, body, and spirit.
        </div>
        <Link href='/'>
            <Image src='/km.png' alt='know more' width={150} height={150} className='hidden md:block sm:block'/>
        </Link>
      </motion.div>
      <div className='flex flex-col gap-10 lg:w-3/5'>
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
          delay: 1,
          duration: 0.5,
        }} className='flex flex-col gap-5'>
            <div className='text-[#FF9900] lg:text-3xl text-2xl font-bold'>
                Our commitment
            </div>
            <div className='text-white lg:text-xl text-sm'>
            We are committed to building a Gurukul education system that honors Indias ancient heritage while embracing modernity. Our Gurukuls serve as sanctuaries of knowledge, where students are not only taught academic subjects but also instilled with moral values, ethical principles, and a deep sense of responsibility towards humanity.
            </div>
            <Line/>
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
          delay: 1,
          duration: 0.5,
        }} className='flex flex-col gap-5'>
            <div className='text-[#FF9900] lg:text-3xl text-2xl font-bold'>
                Transforming youth
            </div>
            <div className='text-white lg:text-xl text-sm lg:text-left text-justify'>
            At Manparth, we recognize the immense potential of Indias youth to become global leaders and ambassadors of change. Through our transformative educational programs and initiatives, we empower young minds to unlock their full potential, cultivate critical thinking skills, and embrace diversity. We believe that by nurturing the next generation of visionary leaders, we can propel Bharat towards its rightful place as a Vishwa Guru—a beacon of knowledge, compassion, and enlightenment for the world.
            </div>
            <Line/>
        </motion.div>

      </div>
    </div>
  )
}

export default Wwa
