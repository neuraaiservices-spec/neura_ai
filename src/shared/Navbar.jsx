import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "focus-area", label: "Focus Area" },
    { to: "solution", label: "Solution" },
    { to: "internship", label: "Internships" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-primary fixed text-white w-full font-Afacad border-b z-40 top-0 ">
      <div className="max-w-7xl mx-auto px-4 py-5 flex lg:justify-between items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          style={{ letterSpacing: "5px" }}
          className="text-xl font-bold select-none cursor-pointer"
        >
          NEURA AI
        </Link>

        {/* Desktop Menu */}
        <nav
          style={{ letterSpacing: "3px" }}
          className="hidden text-sm lg:flex gap-10"
        >
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              isActive={(match) => match || link.to === "home"} // ✅ Highlights "Home" on load
              className="cursor-pointer px-4 py-1"
              activeClass="bg-white text-black rounded-xl font-bold "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:flex">
          <Link
            style={{ letterSpacing: "3px" }}
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            className="cursor-pointer border  text-sm px-4 py-1 rounded transition"
            activeClass="bg-white text-black scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            animate={{ rotate: menuOpen ? 360 : 0 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {menuOpen ? <RxCross2 size={24} /> : <RiMenu3Fill size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{ letterSpacing: "3px" }}
          className="lg:hidden absolute w-full px-4 pb-4 text-sm flex flex-col items-center gap-8 bg-primary border-t pt-7 text-white"
        >
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              isActive={(match) => match || link.to === "home"} // ✅ Mobile too
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-gray-300"
              activeClass="bg-white text-black rounded-xl font-bold "
            >
              {link.label}
            </Link>
          ))}

          <Link
            style={{ letterSpacing: "3px" }}
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="bg-white text-[#0E5247] px-4 py-2 text-sm rounded text-center hover:bg-gray-100 transition cursor-pointer"
            activeClass="text-[#FEB763]"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
}
