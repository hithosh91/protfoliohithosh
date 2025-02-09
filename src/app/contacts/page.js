import Link from "next/link";
import Contactform from "@/components/Contactform";
const page = () => {
  return (
    <div className="w-full h-[100vh] bg-[#040F16] flex flex-col justify-between items-center">
      <div className="w-full h-[20vh] flex justify-between items-center p-6 bg-opacity-80">
        <div>
          <h1 className="text-2xl text-white font-semibold">Portfolio</h1>
        </div>
        <nav className="text-lg text-white flex space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link href="/experiences">
            <h1 className="hover:text-gray-400 cursor-pointer">Experience</h1>
          </Link>
          <Link href="/contacts" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
      <div className="w-full h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl">Contact Us</h1>
        <Contactform />
      </div>
    </div>
  );
};

export default page;
