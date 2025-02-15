"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(result.message || "Something went wrong!");
      }
    } catch (err) {
      setError("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040F16] flex flex-col items-center">
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

      <main className="w-full flex-grow flex flex-col items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold">Let's Connect!</h1>
              <p className="text-lg text-gray-300">
                I'm always open to exciting opportunities, collaborations, and
                meaningful conversations. Feel free to reach out for any
                inquiries—I'm eager to connect and explore how we can create
                value together.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
              <form
                onSubmit={handleSubmit}
                data-web3forms-access-key="cf506e81-d749-4ff4-88c1-ebd1cbd6c3c9"
                className="space-y-4"
              >
                {success && (
                  <p className="text-green-400">Message sent successfully!</p>
                )}
                {error && <p className="text-red-500">{error}</p>}
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
