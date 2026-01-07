// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-cyan-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-theme-card"></span>
          <span className="bg-theme-card w-fit text-theme-text p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="w-24 h-[2px] bg-theme-card"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-theme-text text-xl uppercase">
            Who I am?
          </p>
          <p className="text-theme-text-secondary text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="w-[320px] h-[320px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={personalData.profile}
              width={320}
              height={320}
              alt="Anuj Singh"
              className="w-full h-full transition-all duration-1000 hover:scale-110 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;