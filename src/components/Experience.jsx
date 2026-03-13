"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/variants';
import { cn } from '@/lib/utils';

const experiences = [
  {
    duration: "September 2024 - August 2025",
    role: "Developer Co-op",
    company: "Government of Ontario — MPBSDP Ministry",
    description: `Contributed to the modernization of a legacy AS400 system supporting 30+ business applications by documenting system functionality
    and evaluating modernization strategies with internal teams and external vendors. Explored approaches such as code transpilation and LLM-assisted re-engineering while
    gaining exposure to legacy technologies including RPG and DB2.`,
    current: false,
  },
  {
    duration: "September 2023 - April 2024",
    role: "Open Source Developer",
    company: "Google Developer Student Clubs McMaster University",
    description: `Developed a full-stack gamified learning platform as part of a McMaster student team, using Python/Flask for the backend, and HTML/CSS/JavaScript for the frontend.
    The application includes features such as user authentication, interactive quizzes, and a leaderboard to enhance student engagement.`,
    current: false,
  },
  {
    duration: "May 2023 - September 2023",
    role: "VR Developer Co-op",
    company: "CERC@MARC",
    description: `Worked in a McMaster research team to improve a VR train simulation using Unity and C#, improving scene performance by 20% and validating
    functionality through testing on Oculus Rift and HTC Vive headsets.`,
    current: false,
  },
  {
    duration: "May 2022 - September 2022",
    role: "Sales Representative",
    company: "Uptown Communications — Authorized Rogers and Fido Dealer",
    description: `Delivered tailored customer service and product recommendations while exceeding sales targets and generating over $1000 in accessory sales in one month.`,
    current: false,
  },
]

const Experience = () => {
  return (
    <div className='py-24 relative'>
        <div className='container mx-auto'>
            <h2 className='section-heading'>
                    My <span className='text-secondary'>Experience</span>
            </h2>
            <div className='relative'>
                <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/70 via-accent/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]' />

                <div className='space-y-12'>
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className='relative grid gap-8 md:grid-cols-2' 
                      variants={fadeInUp()}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <div className='absolute'></div>

                      <div className={cn('pl-8 md:pl-0',
                        `${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`
                      )}>
                        <div className='glass-card'>
                          <span>{exp.duration}</span>
                          <h3>{exp.role}</h3>
                          <span>{exp.company}</span>
                          <p>{exp.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience