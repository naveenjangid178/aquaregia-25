import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the menu and close button
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "FAQ's", path: "/faq" },
    { name: "Developers", path: "/developers" },
  ];

  return (
    <div className="bg-orange-200 absolute top-0 w-full z-30">
      <nav className="shadow-md text-amber-700 font-bold text-[17px]">
        <div className="flex justify-between items-center px-5 py-3 md:px-10">
          {/* Logo Section */}
          <div className="text-xl font-bold">
            <Logo classes={"w-36"} />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-amber-900 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section (Register Button) */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
              <Link to="/register">Register Now</Link>
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Hidden when menu is open) */}
          {!isMenuOpen && (
            <button
              className="md:hidden text-amber-700 z-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed pt-12 top-0 left-0 w-full h-screen bg-orange-200 z-40 shadow-md transform transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button Inside the Menu */}
          <button 
            className="absolute top-5 right-5 text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Mobile Menu Content */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-xl font-bold mb-6">
              <Logo classes={"w-36"} />
            </div>

            <ul className="flex flex-col items-center gap-8 text-lg">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-gray-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Register Button (Mobile) */}
            <button className="mt-6 px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
              <Link to="/register">Register Now</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;