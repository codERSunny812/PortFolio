'use client'
import React from "react";

import { SectionWrapper } from "./hoc";
import { technologies } from "../constants/constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import Skills from "./Skills";

const Tech = () => {
  return (
    <>
      <div className='relative'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Tech</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Skills.</h2>
        </motion.div>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
      </div>
      <div className='flex relative z-10 flex-col flex-wrap justify-center gap-10'>
        <div className=" flex flex-wrap gap-10 justify-center">
          {technologies.slice(0, 7).map((technology, index) => (
            <div className='w-28 h-28 mt-5' key={technology.name}>
              <Skills name={technology.name} icon={technology.icon} index={index} />
            </div>
          ))}
        </div>
        <div className=" flex flex-wrap gap-10 justify-center">
          {technologies.slice(7, 12).map((technology, index) => (
            <div className='w-28 h-28 mt-5' key={technology.name}>
              <Skills name={technology.name} icon={technology.icon} index={index} />
            </div>
          ))}
        </div>
        <div className=" flex flex-wrap gap-10 justify-center">
          {technologies.slice(12).map((technology, index) => (
            <div className='w-24 h-24 mt-5' key={technology.name}>
              <Skills name={technology.name} icon={technology.icon} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        <div className="w-full h-full z-[-10] opacity-[0.3] absolute flex flex-col items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay="autoplay"
            src="/galaxy.mp4"
          ></video>
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "");
