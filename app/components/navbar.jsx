'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import ThemeToggle from "./theme-toggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="bg-transparent sticky top-0 z-[9999] backdrop-blur-md bg-theme-bg/80 w-full">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-theme-text text-3xl font-bold"
              onClick={closeMenu}
            >
              Anuj Singh
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:space-x-1">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-theme-text transition-colors duration-300 hover:text-cyan-500">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
                <div className="text-sm text-theme-text transition-colors duration-300 hover:text-cyan-500">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
                <div className="text-sm text-theme-text transition-colors duration-300 hover:text-cyan-500">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
                <div className="text-sm text-theme-text transition-colors duration-300 hover:text-cyan-500">EDUCATION</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
                <div className="text-sm text-theme-text transition-colors duration-300 hover:text-cyan-500">BLOGS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
                <div className="text-sm text-theme-text transition-colors duration-300 hover:text-cyan-500">PROJECTS</div>
              </Link>
            </li>
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-theme-text hover:text-cyan-500 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <ul className="flex flex-col space-y-1 pb-4">
            <li>
              <Link
                className="block px-4 py-3 no-underline outline-none hover:no-underline"
                href="/#about"
                onClick={closeMenu}
              >
                <div className="text-base text-theme-text transition-colors duration-300 hover:text-cyan-500">
                  ABOUT
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 no-underline outline-none hover:no-underline"
                href="/#experience"
                onClick={closeMenu}
              >
                <div className="text-base text-theme-text transition-colors duration-300 hover:text-cyan-500">
                  EXPERIENCE
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 no-underline outline-none hover:no-underline"
                href="/#skills"
                onClick={closeMenu}
              >
                <div className="text-base text-theme-text transition-colors duration-300 hover:text-cyan-500">
                  SKILLS
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 no-underline outline-none hover:no-underline"
                href="/#education"
                onClick={closeMenu}
              >
                <div className="text-base text-theme-text transition-colors duration-300 hover:text-cyan-500">
                  EDUCATION
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 no-underline outline-none hover:no-underline"
                href="/blog"
                onClick={closeMenu}
              >
                <div className="text-base text-theme-text transition-colors duration-300 hover:text-cyan-500">
                  BLOGS
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 no-underline outline-none hover:no-underline"
                href="/#projects"
                onClick={closeMenu}
              >
                <div className="text-base text-theme-text transition-colors duration-300 hover:text-cyan-500">
                  PROJECTS
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;