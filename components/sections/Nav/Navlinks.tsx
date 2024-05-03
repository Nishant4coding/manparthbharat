import Link from "next/link";

function Navlinks() {
  return (
    <div className="flex gap-6 lg:gap-20 justify-center lg:justify-between items-left lg:flex-row flex-col ">
      <Link href={"#service"} className="text-violet-50 hover:text-violet-300 transition-colors duration-300">
        What we do
      </Link>
      <Link href={"#about"} className="text-violet-50 hover:text-violet-300 transition-colors duration-300">
        Who are we
      </Link>
      <Link
        href={"https://www.linkedin.com/company/astrixmarketing/"}
        target="_blank"
        className="text-violet-50 hover:text-violet-300 transition-colors duration-300"
      >
        Careers
      </Link>
    </div>
  );
}

export default Navlinks;
