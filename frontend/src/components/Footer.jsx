import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-orange-200 text-amber-800 pt-8">
      <div className="mx-auto px-6">
        {/* Logo */}
        <div className="text-center md:text-left">
          <Logo classes="w-60 mx-auto md:mx-0" />
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          {/* Directions Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-amber-700">Directions</h2>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-amber-700 mr-2" />
              <a
                href="https://www.google.com/maps/dir//google+maps+maharaja+college+jaipur"
                className="hover:font-bold text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swai Ram Singh Rd, Ashok Nagar, Jaipur, Rajasthan 302001
              </a>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-amber-700 mr-2" />
              <a href="tel:+9101412577290" className="hover:font-bold text-sm sm:text-base">
                01412577290
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex flex-col gap-2 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold text-amber-700">Menu</h2>
            <Link to="/about" className="hover:font-bold text-sm sm:text-base">
              About Us
            </Link>
            <Link to="/faq" className="hover:font-bold text-sm sm:text-base">
              FAQ
            </Link>
            <Link to="/developers" className="hover:font-bold text-sm sm:text-base">
              Developers
            </Link>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-2 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold text-amber-700">CONTACT US</h2>
            <div className="flex items-center">
              <FaPhoneAlt className="text-amber-700 mr-2" />
              <a href="tel:+918079088775" className="hover:font-bold text-sm sm:text-base">
                +91 8079088775
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-amber-700 mr-2" />
              <a href="mailto:contact@aquaregia.com" className="hover:font-bold text-sm sm:text-base">
                contact@aquaregia.com
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com"
                className="text-amber-800 hover:text-amber-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-amber-800 hover:text-amber-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-amber-800 hover:text-amber-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-4 mt-10 text-center">
          <p className="text-sm text-amber-800">
            © {new Date().getFullYear()} Aquaregia | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
