import Link from "next/link";
import Image from "next/image";
import { skillData } from "@/utils/skills";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#040F16] flex flex-col">
      {/* Navigation Bar */}
      <header className="w-full h-[15vh] md:h-[20vh] flex justify-between items-center p-6 bg-opacity-80">
        <div>
          <h1 className="text-2xl text-white font-semibold">Portfolio</h1>
        </div>
        <nav className="text-lg text-white flex space-x-4 md:space-x-8">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/contacts"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Skills Section */}
      <main className="w-full flex-grow flex flex-col items-center justify-center py-8">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 animate-fadeIn">
          Skills
        </h1>
        <div className="container mx-auto px-4">
          {" "}
          {/* Added container for better spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillData.map((data, id) => (
              <div
                key={id}
                className="bg-[#1E2A47] p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300 group" // Added group for animation
              >
                <div className="flex items-center justify-center h-20 mb-4">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={60}
                    height={40}
                    className="mx-auto transition-transform duration-300 group-hover:scale-110" // Scale image on hover
                  />
                </div>
                <h2 className="text-white text-xl font-semibold text-center">
                  {data.name}
                </h2>{" "}
                {/* Center text */}
                <p className="text-gray-300 mt-2 text-sm text-center">
                  {data.description}
                </p>{" "}
                {/* Center text */}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
