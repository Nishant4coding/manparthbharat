import { useState } from "react";
import logo from '@/public/mlogo.png'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavLinks from "./Navlinks";

export function HamburgerOnMobile() {
  const [open, setOpen] = useState(false);
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        {/* burger icon */}
        <svg
          viewBox="0 0 50 50"
          width="28px"
          height="28px"
          fill="white"
        >
          <defs>
            <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  stopColor: "#FF9900",
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="30%"
                style={{
                  stopColor: "#FF9900",
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: "#FFD700",
                  stopOpacity: 1,
                }}
              />
            </linearGradient>
          </defs>
          <path
            d="M5 8a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5z"
            fill="url(#a)"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-transparent fc text-violet-50 border-none border ">
        <SheetHeader className="text-start h-full flex items-start justify-center">
          <SheetTitle className="pb-4 text-white font-bold">Links --&gt;</SheetTitle>
          <SheetDescription
            className="flex flex-col gap-4 text-2xl text-start decoration-[#6255C2]"
            onClick={(_) => setOpen(false)}
          >
            <NavLinks />
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="m-auto h-auto w-auto"
          />
          <span className="text-2xl font-bold mt-4">MANPARTH</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
