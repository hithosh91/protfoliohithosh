"use client";

import Link from "next/link";
import Image from "next/image";
import { skillData } from "@/utils/skills";
import { useState } from "react";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040F16] flex flex-col items-center overflow-hidden">
      <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-gray-800 to-blue-900 shadow-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Portfolio
          </h1>

          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
            aria-label="Toggle Navigation" // Accessibility
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav
            className={`lg:flex lg:space-x-8 text-lg text-white absolute lg:static top-full left-0 w-full bg-gray-800 lg:bg-transparent py-4 lg:py-0 px-6 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "translate-y-0"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="/"
              className="hover:text-gray-400 block lg:inline-block"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-400 block lg:inline-block"
            >
              About
            </Link>
            <Link
              href="/skills"
              className="hover:text-gray-400 block lg:inline-block"
            >
              Skills
            </Link>

            <Link
              href="/contacts"
              className="hover:text-gray-400 block lg:inline-block"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Skills Section */}
      <main className="w-full flex-grow flex flex-col items-center justify-center py-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Skills
        </h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillData.map((data, id) => (
              <div
                key={id}
                className="bg-[#1E2A47] p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
              >
                <div className="flex items-center justify-center h-20 mb-4">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={60}
                    height={40}
                    className="mx-auto transition-transform duration-300 hover:scale-110"
                    style={{ width: "auto", height: "auto" }} // Ensuring aspect ratio is maintained
                  />
                </div>
                <h2 className="text-white text-xl font-semibold text-center">
                  {data.name}
                </h2>
                <p className="text-gray-300 mt-2 text-sm text-center">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
