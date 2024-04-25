import Image from "next/image";
import React from "react";
import quote from "@/public/Assets/quote.svg";

function Testimonial() {
  return (
    <div className="flex flex-col lg:p-20 p-5 text-white bg-black">
      
    <h1 className="text-5xl text-center font-bold text-[#FFD700]">Know What people <span className="text-[#FF9900] text-5xl text-center font-bold">say</span> about us</h1>
    <div className="flex lg:flex-row flex-col justify-between  items-center justify-center ">
      <div className="flex flex-col items-center justify-center p-10 text-white bg-black">
        <div className="w-64 rounded-xl bg-black p-6 shadow-lg sm:w-96  overflow-hidden ">
          <div className="relative w-full z-20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
            <div className="absolute mb-auto left-0 w-40 h-40 bg-[#FF9900] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
          </div>
          <div className="mb-6 text-center sm:mb-4">
            "This company made the whole process so smooth. Their team was
            skilled, communicated clearly, and the final product was top-notch.
            Definitely worth working with."
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=200"
                alt="Alice"
                className="size-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold">Nishant</div>
                <div className="text-slate-500">Developer</div>
              </div>
            </div>
            {/* <div className="text-7xl text-[Roboto] text-yellow-400">"</div> */}
            <Image src={quote} alt="quote" />
          </div>
        </div>
      </div>
      <div className="flex flex-col  p-10 ">
        <div className="w-64 rounded-xl bg-black p-6 shadow-lg sm:w-96  overflow-hidden ">
          <div className="relative w-full z-20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
            <div className="absolute mb-auto left-0 w-40 h-40 bg-[#FF9900] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
          </div>
          <div className="mb-6 text-center sm:mb-4">
            "This company made the whole process so smooth. Their team was
            skilled, communicated clearly, and the final product was top-notch.
            Definitely worth working with."
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=200"
                alt="Alice"
                className="size-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold">Nishant</div>
                <div className="text-slate-500">Developer</div>
              </div>
            </div>
            {/* <div className="text-7xl text-[Roboto] text-yellow-400">"</div> */}
            <Image src={quote} alt="quote" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-10 text-white bg-black">
        <div className="w-64 rounded-xl bg-black p-6 shadow-lg sm:w-96  overflow-hidden ">
          <div className="relative w-full z-20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
            <div className="absolute mb-auto left-0 w-40 h-40 bg-[#FF9900] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-100"></div>
          </div>
          <div className="mb-6 text-center sm:mb-4">
            "This company made the whole process so smooth. Their team was
            skilled, communicated clearly, and the final product was top-notch.
            Definitely worth working with."
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=200"
                alt="Alice"
                className="size-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold">Nishant</div>
                <div className="text-slate-500">Developer</div>
              </div>
            </div>
            {/* <div className="text-7xl text-[Roboto] text-yellow-400">"</div> */}
            <Image src={quote} alt="quote" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
