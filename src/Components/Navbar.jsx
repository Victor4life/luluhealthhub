import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/blog", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90" : "bg-black bg-opacity-10"
      }`}
    >
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="LULU HealthHub"
            className="h-8 w-40 md:h-15 mr-3 transition-transform duration-300 hover:scale-110"
          />
        </a>
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                className={({ isActive }) =>
                  `text-white transition-colors ${
                    isActive ? "border-b-2 border-blue-400" : ""
                  }`
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-green-500 transition-colors">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-green-500 transition-colors">
            <FaTiktok />
          </a>
          <a href="/" className="hover:text-green-500 transition-colors">
            <FaTwitter />
          </a>
          <a href="/" className="hover:text-green-500 transition-colors">
            <FaInstagram />
          </a>
          <button className="bg-blue-500 px-6 py-2 font-medium text-white rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Book a Session
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="bg-black bg-opacity-90 px-4 py-6 space-y-4">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                onClick={toggleMenu}
                to={path}
                className={({ isActive }) =>
                  `block text-white hover:text-green-500 transition-colors ${
                    isActive ? "text-green-500" : ""
                  }`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="w-full bg-blue-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-blue-500 transition-all duration-200 ease-in">
              Book a Session
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
