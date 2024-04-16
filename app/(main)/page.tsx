import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="bg-black">
   <Navbar/>
   <Hero/>
   <Footer/>
   </div>
   </>
  );
}
