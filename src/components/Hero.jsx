"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { animate, easeInOut, motion, useMotionTemplate, useMotionValue } from "motion/react"
import headshotpic from "../assets/headshotpic.png"
import ScrollReveal from './ScrollReveal';

const DARK_COLORS = ["#16a34a", "#0ea5e9", "#6366f1", "#f59e0b"];
const LIGHT_COLORS = ["#86a995", "#9fb3d9", "#d9c37a", "#b8a58d"];

const Hero = () => {
  // bg-gradient-to-b from-zinc-900 via-green-600 to-sky-700
  // bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]
  // [background:radial-gradient(125%_125%_at_50%_10%,#18181b_50%,#16a34a_100%)]
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;
  const baseColor = isDark ? "#18181b" : "#ebe7df";

  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(110% 110% at 50% 10%, ${baseColor} 50%, ${color} 100%)`;

  useEffect(() => {
    const controls = animate(color, colors, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => controls.stop();
  }, [color, colors]);

  return (
    <motion.div style={{ backgroundImage }} className='py-24 relative overflow-clip min-h-screen flex items-center justify-center'>
      <div className='text-center transform -translate-y-20'>
        <ScrollReveal>
          <div className='text-7xl font-bold'>
            <h1>Hello I'm</h1>
            <h1 className='text-secondary'>Mithun Paramathasan</h1>
          </div>
          <span className='block text-xl mt-4 text-muted-foreground'>Software Developer</span>
        </ScrollReveal>
      </div>
      <Image
        src={headshotpic}
        alt="headshot picture"
        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[40vh] object-contain'
      />  
      
      {/* adds a gradient fade into the About section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(ellipse at bottom, #18181b 70%, rgba(24,24,27,0) 85%)"
            : "radial-gradient(ellipse at bottom, #ebe7df 70%, rgba(247,248,250,0) 85%)",
        }}
      />

      {/* <div
        className="absolute rounded-[50%] w-[6000px] h-[1300px] top-[1125px] left-[50%] -translate-x-1/2"
        style={{
          backgroundImage: "radial-gradient(closest-side, #18181b 80%, rgba(24,24,27,0))",
        }}
      /> */}

    </motion.div>
  )
}

export default Hero