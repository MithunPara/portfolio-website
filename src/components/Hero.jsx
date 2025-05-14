"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"
import headshotpic from "../assets/headshotpic.png"

const Hero = () => {
  // bg-gradient-to-b from-zinc-900 via-green-600 to-sky-700
  // bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]
  return (
    <div className='py-24 relative overflow-clip min-h-screen bg-[linear-gradient(to_bottom,_#18181b_20%,_#16a34a_100%)]'>
      <div>
        <div className='text-7xl font-bold text-center'>
          <h1 className='text-slate-100'>Hello I'm</h1>
          <h1 className='text-emerald-200'>Mithun Paramathasan</h1>
        </div>

        <span className='block text-xl text-center mx-auto mt-4 text-white/85'>Software Developer</span>

        <Image
          src={headshotpic}
          alt="headshot picture"
          className='absolute bottom-0 left-1/2 -translate-x-1/2 max-w-xs md:max-w-sm lg:max-w-md w-full object-contain'
        /> 
      </div>
    </div> 
  )
}

export default Hero