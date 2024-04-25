// components/BackToTopButton.js

"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import BackToTop from '@/public/Assets/quote.svg'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className='fixed bottom-10 lg:right-10 right-2 cursor-pointer z-40 text-[#FF9900] text-7xl'  onClick={scrollToTop}>
        {/* <Image src={BackToTop} alt='BacktoTop' width={32} height={32}/> */}^
        </div>
      )}
     
       
    </>
  );
};

export default BackToTopButton;
