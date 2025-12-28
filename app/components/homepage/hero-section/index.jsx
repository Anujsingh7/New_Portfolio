// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-hero-primary md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className="text-hero-accent">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className="text-hero-primary">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-hero-accent hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target='_blank'
                className="transition-all text-hero-accent hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
            {personalData.facebook && (
              <Link
                href={personalData.facebook}
                target='_blank'
                className="transition-all text-hero-accent hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target='_blank'
                className="transition-all text-hero-accent hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
            {personalData.twitter && (
              <Link
                href={personalData.twitter}
                target='_blank'
                className="transition-all text-hero-accent hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={30} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-theme-card rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider theme-text-accent no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get In Touch</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider theme-text-accent no-underline transition-all duration-200 ease-out hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 relative rounded-lg border border-theme-border bg-theme-card">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-gray-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-theme-border px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-syntax-keyword">const</span>
                <span className="mr-2 text-theme-text">coder</span>
                <span className="mr-2 text-syntax-keyword">=</span>
                <span className="theme-text-muted">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-theme-text">name:</span>
                <span className="theme-text-muted">{`'`}</span>
                <span className="text-syntax-string">Anuj Kumar Singh</span>
                <span className="theme-text-muted">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-theme-text">skills:</span>
                <span className="theme-text-muted">{`['`}</span>
                <span className="text-syntax-string">React</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">NextJS</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">Redux</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">Express</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">Spring-Batch</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">Spring-Boot</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">NestJS</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">MySql</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">MongoDB</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">Docker</span>
                <span className="theme-text-muted">{"', '"}</span>
                <span className="text-syntax-string">Azure</span>
                <span className="theme-text-muted">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-theme-text">hardWorker:</span>
                <span className="text-syntax-boolean">true</span>
                <span className="theme-text-muted">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-theme-text">quickLearner:</span>
                <span className="text-syntax-boolean">true</span>
                <span className="theme-text-muted">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-theme-text">problemSolver:</span>
                <span className="text-syntax-boolean">true</span>
                <span className="theme-text-muted">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-syntax-special">hireable:</span>
                <span className="text-syntax-boolean">function</span>
                <span className="theme-text-muted">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-syntax-keyword">return</span>
                <span className="theme-text-muted">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-syntax-property">this.</span>
                <span className="mr-2 text-theme-text">hardWorker</span>
                <span className="text-syntax-keyword">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-syntax-property">this.</span>
                <span className="mr-2 text-theme-text">problemSolver</span>
                <span className="text-syntax-keyword">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-syntax-property">this.</span>
                <span className="mr-2 text-theme-text">skills.length</span>
                <span className="mr-2 text-syntax-keyword">&gt;=</span>
                <span className="text-syntax-boolean">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 theme-text-muted">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 theme-text-muted">{`};`}</span></div>
              <div><span className="theme-text-muted">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;