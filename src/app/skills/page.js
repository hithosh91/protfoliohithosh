import Link from "next/link";
import Image from "next/image";
import { skillData } from "@/utils/skills";

const Page = () => {
  return (
    <div className="w-full h-screen bg-[#040F16] flex flex-col">
      {/* Navigation Bar */}
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
          <Link href="/contacts" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>

      <div className="w-full h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl mb-6">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillData.map((data, id) => (
            <div
              key={id}
              className="bg-[#1E2A47] p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <Image
                src={data.image}
                alt={data.name}
                width={60} // Adjust size as needed
                height={40} // Adjust size as needed
                className="mx-auto mb-4"
              />
              <h2 className="text-white text-xl font-semibold">{data.name}</h2>
              <p className="text-gray-400 mt-2">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
