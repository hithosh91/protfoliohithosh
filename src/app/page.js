import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-[100vh] bg-[#040F16] flex flex-col justify-between items-center">
      <div className="w-full h-[20vh] flex justify-between items-center p-6">
        <div>
          <h1 className="text-xl text-white font-semibold">Portfolio</h1>
        </div>
        <div className="text-xl text-white flex space-x-8">
          <Link href="/">
            <h1 className="hover:text-gray-400 cursor-pointer">Home</h1>
          </Link>

          <Link href="/about">
            <h1 className="hover:text-gray-400 cursor-pointer">About</h1>
          </Link>

          <Link href="/skills">
            <h1 className="hover:text-gray-400 cursor-pointer">Skills</h1>
          </Link>

          <Link href="/experiences">
            <h1 className="hover:text-gray-400 cursor-pointer">Experience</h1>
          </Link>

          <Link href="/contacts">
            <h1 className="hover:text-gray-400 cursor-pointer">Contact</h1>
          </Link>
        </div>
      </div>

      <div className="w-full h-[70vh] flex justify-center items-center mt-1 space-x-10">
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/profile.jpg"
            alt="Hithosh Kota Profile"
            width={300}
            height={300}
            className="w-200 h-200 rounded-full border-4 border-blue-500 transform transition duration-500 hover:scale-105"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start text-white space-y-4 opacity-0 animate-fadeIn">
          <h1 className="text-2xl text-center">Hello, it's Me</h1>
          <h1 className="text-4xl text-center">Hithosh Kota</h1>
          <h2 className="text-2xl text-center">
            And I&apos;m a{" "}
            <span className="text-blue-600">Frontend Developer</span>
          </h2>

          <div className="flex justify-center space-x-8">
            <Link
              href="https://www.linkedin.com/in/hithosh-kota-5a5a23315/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={40}
                className="text-white hover:text-blue-500 transition duration-300"
              />
            </Link>

            <Link
              href="https://github.com/hithosh91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGitSquare
                size={40}
                className="text-white hover:text-blue-300 transition duration-300"
              />
            </Link>
          </div>

          <button className="w-40 h-12 rounded-xl bg-blue-600 text-white hover:bg-green-300 hover:text-indigo-500 transition duration-300">
            Download Resume
          </button>
        </div>
      </div>
      <div className="w-full h-[10vh] ">
        <h1 className="text-xl animate-bounce text-white text-center">
          Know more about @Contact me
        </h1>
      </div>
    </div>
  );
};

export default Page;
