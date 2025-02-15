"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle closing the mobile menu when a link is clicked
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Page transitions using Framer Motion
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

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

  //useEffect to prevent hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading indicator
  }

  return (
    <motion.div
      className="min-h-screen bg-[#040F16] flex flex-col items-center overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-gray-800 to-blue-900 shadow-xl py-2">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-white hover:text-gray-300 transition duration-300"
          >
            Portfolio
          </Link>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
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

          <motion.nav
            className={`lg:flex lg:space-x-8 text-lg text-white absolute lg:static top-full left-0 w-full bg-gray-800 lg:bg-transparent py-4 lg:py-0 px-6 transition-all duration-300 ease-in-out z-10 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: "-100%" },
            }}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link
              href="/"
              className="hover:text-gray-400 block lg:inline-block"
              onClick={handleMenuLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-400 block lg:inline-block"
              onClick={handleMenuLinkClick}
            >
              About
            </Link>
            <Link
              href="/skills"
              className="hover:text-gray-400 block lg:inline-block"
              onClick={handleMenuLinkClick}
            >
              Skills
            </Link>
            <Link
              href="/contacts"
              className="hover:text-gray-400 block lg:inline-block"
              onClick={handleMenuLinkClick}
            >
              Contact
            </Link>
          </motion.nav>
        </div>
      </header>

      <main className="w-full flex-grow flex flex-col items-center justify-center py-20 mt-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 md:pr-12">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-cyan-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
              >
                Let's Connect!
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                }}
              >
                I'm always open to exciting opportunities, collaborations, and
                meaningful conversations. Feel free to reach out for any
                inquiries—I'm eager to connect and explore how we can create
                value together.
              </motion.p>
            </div>
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 120,
                },
              }}
            >
              <form
                onSubmit={handleSubmit}
                data-web3forms-access-key="cf506e81-d749-4ff4-88c1-ebd1cbd6c3c9"
                className="space-y-4"
              >
                <AnimatePresence>
                  {success && (
                    <motion.p
                      className="text-green-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {error && (
                    <motion.p
                      className="text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none transition duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none transition duration-300"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none transition duration-300"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg transition disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-around">
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-2">Contact Information</h4>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-cyan-500" />
              <span>Your Address</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-cyan-500" />
              <span>+1 123-456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-cyan-500" />
              <span>email@example.com</span>
            </div>
          </div>
          <div className="text-center">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Page;
