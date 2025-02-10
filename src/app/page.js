import Link from "next/link";
import { FaLinkedin, FaGitSquare } from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#040F16] flex flex-col justify-between items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-6">
        <h1 className="text-xl text-white font-semibold">Portfolio</h1>
        <div className="text-xl text-white flex space-x-4">
          <Link href="/">
            <a className="hover:text-gray-400">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-400">About</a>
          </Link>
          <Link href="/skills">
            <a className="hover:text-gray-400">Skills</a>
          </Link>
          <Link href="/experiences">
            <a className="hover:text-gray-400">Experience</a>
          </Link>
          <Link href="/contacts">
            <a className="hover:text-gray-400">Contact</a>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full flex-1 space-y-6 md:space-y-0 md:space-x-10 p-6">
        <div className="flex justify-center items-center">
          <Image
            src="/profile.jpg"
            alt="Hithosh Kota Profile"
            width={300}
            height={300}
            className="rounded-full border-4 border-blue-500 transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-white space-y-4">
          <h1 className="text-2xl">Hello, it's Me</h1>
          <h1 className="text-4xl">Hithosh Kota</h1>
          <h2 className="text-2xl">
            And I'm a <span className="text-blue-600">Frontend Developer</span>
          </h2>
          <div className="flex space-x-8">
            <Link href="https://www.linkedin.com/in/hithosh-kota-5a5a23315/">
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                  size={40}
                  className="text-white hover:text-blue-500 transition duration-300"
                />
              </a>
            </Link>
            <Link href="https://github.com/hithosh91">
              <a target="_blank" rel="noopener noreferrer">
                <FaGitSquare
                  size={40}
                  className="text-white hover:text-blue-300 transition duration-300"
                />
              </a>
            </Link>
          </div>
          <button className="w-40 h-12 rounded-xl bg-blue-600 text-white hover:bg-green-300 hover:text-indigo-500 transition duration-300">
            Download Resume
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-4">
        <h1 className="text-xl animate-bounce text-white text-center">
          Know more about @Contact me
        </h1>
      </div>
    </div>
  );
};

export default Page;
