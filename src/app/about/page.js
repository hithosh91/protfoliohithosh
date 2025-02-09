import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { experienceData } from "./../../utils/Experience";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center">
      <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-gray-800 to-blue-900 shadow-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Portfolio
          </h1>
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
      </header>

      <main className="container mx-auto px-6 pt-24 pb-12 mt-20 flex-1">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <section
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl
                            transform transition duration-500 hover:scale-[1.02] 
                            border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <FaGraduationCap className="inline-block mr-3 mb-1" />
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  degree: "MSc Advanced Computer Science with Industry",
                  institution: "University of Leicester, United Kingdom",
                },
                {
                  degree: "Electronic Communication Engineering",
                  institution: "JNTU Ananthapur",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-blue-900/80 rounded-xl p-6
                           transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-lg
                           border border-white/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaGraduationCap className="text-cyan-400 text-3xl mb-4" />
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-300 font-medium">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl
                            transform transition duration-500 hover:scale-[1.02]
                            border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <MdWork className="inline-block mr-3 mb-1" />
              Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((experience, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-blue-900/80 rounded-xl p-6
                           transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-lg
                           border border-white/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-4">
                    <MdWork className="text-cyan-400 text-3xl flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        {experience.title}
                      </h3>
                      <p className="text-cyan-300 font-medium mb-1">
                        {experience.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {experience.duration}
                      </p>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((task, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 before:content-['▹'] before:text-cyan-400 before:mr-2"
                          >
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
