'use client'
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lottie from "lottie-react";
import heroAnim from '../assets/dev2.json'

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <section className={`relative z-[-1] w-full h-screen mx-auto banner overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[150px] right-40 z-[-1] animation  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div data-scroll data-scroll-speed='0.4'>
          <h1 className={`font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 text-white`}>
            Hi, I'm <p className=' z-10 text-transparent bg-clip-text bg-gradient-to-r from-sun to-moon text-[60px] lg:text-[110px]'>Sushil</p>
          </h1>

        </div>
      </div>
      <div className="sliderContainer md:z-[-10] top-24">
        <div ref={slider} className="slider overflow-hidden text-secondary text-[70px] lg:text-[200px]">
          <p ref={firstText} >Full-Stack Developer.</p>
          <p ref={secondText}>Full-Stack Developer.</p>
        </div>
      </div>
      <Lottie
        animationData={heroAnim}
        loop={true}
        className="z-[-2] absolute bottom-32 right-0 animation"
      />

  
    </section>
  );
};

export default Hero;
