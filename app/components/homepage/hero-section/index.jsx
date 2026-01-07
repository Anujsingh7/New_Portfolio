// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { AnimatedCode } from "@/app/components/animated-code";

function HeroSection() {
  // Original detailed code text
  const codeText = `const coder = {
  name: 'Anuj Kumar Singh',
  skills: ['React', 'NextJS', 'Redux', 'ExpressJS', 'Spring-Batch', 'Spring-Boot', 'MySql', 'PostgreSql', 'MongoDB', 'Docker', 'Azure'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12 w-full max-w-7xl px-4">
        {/* Left Column - Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-theme-text">Hi, I'm</span>
              <br />
              <span className="hero-gradient-text">
                {personalData.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-theme-text-secondary font-medium">
              {personalData.designation}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href={personalData.github}
              target='_blank'
              className="social-icon-card"
            >
              <BsGithub size={24} className="social-icon" />
            </Link>
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target='_blank'
                className="social-icon-card"
              >
                <BsLinkedin size={24} className="social-icon" />
              </Link>
            )}
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target='_blank'
                className="social-icon-card"
              >
                <SiLeetcode size={24} className="social-icon" />
              </Link>
            )}
            {personalData.gfg && (
              <Link
                href={personalData.gfg}
                target='_blank'
                className="social-icon-card"
              >
                <SiGeeksforgeeks size={24} className="social-icon" />
              </Link>
            )}
            {personalData.twitter && (
              <Link
                href={personalData.twitter}
                target='_blank'
                className="social-icon-card"
              >
                <FaTwitterSquare size={24} className="social-icon" />
              </Link>
            )}
            {personalData.facebook && (
              <Link
                href={personalData.facebook}
                target='_blank'
                className="social-icon-card"
              >
                <FaFacebook size={24} className="social-icon" />
              </Link>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link 
              href="#contact" 
              className="hero-button-primary"
            >
              <span>Get In Touch</span>
              <RiContactsFill size={18} className="button-icon" />
            </Link>

            <Link 
              href={personalData.resume}
              target="_blank"
              className="hero-button-secondary"
            >
              <span>Download Resume</span>
              <MdDownload size={18} className="button-icon-down" />
            </Link>
          </div>
        </div>

        {/* Right Column - Code Box */}
        <div className="order-1 lg:order-2 w-full">
          <div className="relative group">
            {/* Main code box */}
            <div className="code-box">
              {/* Top bar with gradient */}
              <div className="code-box-top-bar"></div>
              
              {/* Window controls */}
              <div className="code-box-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-xs text-theme-text-secondary font-mono">coder.js</span>
                </div>
              </div>
              
              {/* Code content */}
              <div className="px-6 py-6 lg:px-8 lg:py-8">
                <AnimatedCode code={codeText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;