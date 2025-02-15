"use client";
import Link from "next/link";
import { FaLinkedin, FaGitSquare } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);

  const resumeUrl = "/hithosh-resume.pdf";
  const resumeFilename = "HithoshKota-Resume.pdf";

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen bg-[#040F16] flex flex-col justify-between items-center">
      <header className="w-full h-[15vh] md:h-[20vh] flex justify-between items-center p-4 md:p-6">
        <div>
          <h1 className="text-xl text-white font-semibold">Portfolio</h1>
        </div>
        <nav className="text-xl text-white flex flex-wrap justify-end space-x-2 md:space-x-8">
          <Link href="/">
            <h1 className="hover:text-gray-400 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-blue-300">
              Home
            </h1>
          </Link>

          <Link href="/about">
            <h1 className="hover:text-gray-400 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-blue-300">
              About
            </h1>
          </Link>

          <Link href="/skills">
            <h1 className="hover:text-gray-400 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-blue-300">
              Skills
            </h1>
          </Link>

          <Link href="/experiences">
            <h1 className="hover:text-gray-400 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-blue-300">
              Experience
            </h1>
          </Link>

          <Link href="/contacts">
            <h1 className="hover:text-gray-400 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-blue-300">
              Contact
            </h1>
          </Link>
        </nav>
      </header>

      <main className="w-full h-[75vh] md:h-[70vh] flex flex-col md:flex-row justify-center items-center mt-1 md:space-x-10">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <Image
            src="/profile.jpg"
            alt="Hithosh Kota Profile"
            width={200}
            height={200}
            className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-blue-500 transform transition duration-500 hover:scale-105"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white space-y-4 opacity-0 animate-fadeIn px-4 md:px-0">
          <h1 className="text-xl md:text-2xl text-center">Hello, it's Me</h1>
          <h1 className="text-3xl md:text-4xl text-center">Hithosh Kota</h1>
          <h2 className="text-xl md:text-2xl text-center">
            And I'm a <span className="text-blue-600">Frontend Developer</span>
          </h2>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/hithosh-kota-5a5a23315/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin
                size={30}
                className="text-white hover:text-blue-500 transition duration-300"
              />
            </Link>

            <Link
              href="https://github.com/hithosh91"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGitSquare
                size={30}
                className="text-white hover:text-blue-300 transition duration-300"
              />
            </Link>
          </div>

          <button
            className="w-32 h-10 md:w-40 md:h-12 rounded-xl bg-blue-600 text-white transition-all duration-300 relative overflow-hidden hover:bg-green-300 hover:text-indigo-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleDownloadResume}
            aria-label="Download Resume"
          >
            <span className="relative z-10 p-1 text-sm">Download Resume</span>
            <span
              className={`absolute inset-0 bg-indigo-500 transform transition-transform duration-300 ${
                isHovered ? "translate-x-full" : "-translate-x-full"
              } `}
              aria-hidden="true"
            />
          </button>
        </div>
      </main>

      <footer className="w-full h-[10vh]">
        <h1 className="text-lg md:text-xl animate-bounce text-white text-center">
          Know more about @Contact me
        </h1>
      </footer>
    </div>
  );
};

export default Page;
