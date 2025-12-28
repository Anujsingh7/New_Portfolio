'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Skills() {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleManualScroll = (direction) => {
    // Pause auto-scroll temporarily when manually scrolling
    setIsPaused(true);
    
    const container = marqueeRef.current?.querySelector('.rfm-marquee-container');
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
    
    // Resume auto-scroll after 2 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-theme-card"></span>
          <span className="bg-theme-card w-fit text-theme-text p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-theme-card"></span>
        </div>
      </div>

      <div className="w-full my-12 relative">
        <div className="relative px-12">
          {/* Left Arrow */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-violet-500 hover:bg-violet-600 theme-text-accent p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <BsChevronLeft size={24} />
          </button>

          <div ref={marqueeRef}>
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={!isPaused}
              direction="left"
            >
              {Array(10).fill(skillsData).flat().map((skill, id) => {
                const skillImage = skillsImage(skill);
                if (!skillImage) return null;

                return (
                  <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    key={id}>
                    <div className="h-full w-full rounded-lg border border-theme-border bg-theme-card shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                          <Image
                            src={skillImage.src}
                            alt={skill}
                            width={40}
                            height={40}
                            className="h-full w-auto rounded-lg"
                          />
                        </div>
                        <p className="text-theme-text text-sm sm:text-lg">
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-violet-500 hover:bg-violet-600 theme-text-accent p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <BsChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;