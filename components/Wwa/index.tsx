import React from 'react'

function Wwa() {
  return (
    <div className='bg-black text-white lg:p-20 p-5 '>
      <h1 className='text-center text-5xl text-yellow-300 font-bold mb-10'>Who We Are</h1>

      <div className='flex lg:flex-row flex-col gap-20 '>

        <div className='flex flex-col gap-4 border-solid border-4 rounded-lg p-6 lg:w-1/2'>
            <div className='text-2xl text-yellow-300 text-center font-bold'>Our commitment</div>
            <div className='text-lg  text-justify'>We are committed to building a Gurukul education system that honors India&apos;s ancient heritage while embracing modernity. Our Gurukuls serve as sanctuaries of knowledge, where students are not only taught academic subjects but also instilled with moral values, ethical principles, and a deep sense of responsibility towards humanity.</div>
        </div>
        <div className='flex flex-col gap-4 border-solid border-4 rounded-lg p-6 lg:w-1/2'>
            <div className='text-2xl text-yellow-300 text-center font-bold'>Transforming Youth</div>
            <div className='text-lg  text-justify'>At Manparth, we recognize the immense potential of India&apos;s youth to become global leaders and ambassadors of change. Through our transformative educational programs and initiatives, we empower young minds to unlock their full potential, cultivate critical thinking skills, and embrace diversity. We believe that by nurturing the next generation of visionary leaders, we can propel Bharat towards its rightful place as a Vishwa Guru—a beacon of knowledge, compassion, and enlightenment for the world.</div>


        </div>
      </div>
    </div>
  )
}

export default Wwa
