import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ChevronDown from "../assets/Images/Dropdown-arrow.svg";
import Logo from "../assets/Images/logo.svg";
import menuIcon from "../assets/Images/menu.png";
import closeIcon from "../assets/Images/close.png"; // Optional for closing menu

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-black";

  
  const isServiceRoute =
    location.pathname.startsWith("/general") ||
    location.pathname.startsWith("/govt") ||
    location.pathname.startsWith("/development");

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md bg-white">
      <div className="flex items-center  justify-between px-6 md:px-10 py-4">
        <div>
          <img src={Logo} alt="Logo" width={200} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-lg items-center">
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkClass}>
                About us
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div
                className={`flex items-center gap-1 cursor-pointer ${
                  isServiceRoute ? "text-blue-600 font-semibold" : "text-black"
                }`}
              >
                <span>Services</span>
                <img src={ChevronDown} alt="Dropdown" />
              </div>

              {isDropdownOpen && (
                <ul className="absolute top-8 left-0 bg-white shadow-lg rounded py-2 z-50 w-52">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/general" className={getLinkClass}>
                      General Staffing
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/govt" className={getLinkClass}>
                      Govt Staffing
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/development" className={getLinkClass}>
                      Skill Development
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/leadership" className={getLinkClass}>
                Leadership
              </NavLink>
            </li>
            <li>
              <NavLink to="/culture" className={getLinkClass}>
                Culture
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <img
              src={isMobileMenuOpen ? closeIcon : menuIcon}
              alt="Menu"
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start px-6 pt-24 space-y-4 text-left text-lg">
            <NavLink
              to="/"
              className={getLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={getLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </NavLink>

            {/* Services Dropdown for Mobile */}
            <div className="w-full">
              <div
                className={`flex items-center justify-between cursor-pointer w-full ${
                  isServiceRoute ? "text-blue-600 font-semibold" : "text-black"
                }`}
                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                <span>Services</span>
                <img
                  src={ChevronDown}
                  alt="Dropdown"
                  className={`transform transition-transform duration-200 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isMobileDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <NavLink
                      to="/general"
                      className={getLinkClass}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      General Staffing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/govt"
                      className={getLinkClass}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Govt Staffing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/development"
                      className={getLinkClass}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Skill Development
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            <NavLink
              to="/leadership"
              className={getLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </NavLink>
            <NavLink
              to="/culture"
              className={getLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Culture
            </NavLink>
            <NavLink
              to="/contact"
              className={getLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
