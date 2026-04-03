import React from 'react'
import project1 from "../assets/gymbuddy-logo.png"
import gymbuddy from "../assets/GymBuddy Homepage.png"
import { FaGithub } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const projects = [
    {
        name: "GymBuddy Fitness Tracker",
        stack: "MongoDB, Express, Next.js, Node,js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius imperdiet mauris, id malesuada enim tempor eget",
        git: "#",
        image: gymbuddy
    },
    {
        name: "Gamified Learning Application",
        stack: "Python, Flask, Google Cloud Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius imperdiet mauris, id malesuada enim tempor eget",
        git: "#",
        image: project1
    },
    {
        name: "Island Mesh Generation",
        stack: "Java",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius imperdiet mauris, id malesuada enim tempor eget",
        git: "#",
        image: project1
    }
]

const Projects = () => {
  return (
    <section id='projects' className='py-24 relative scroll-mt-24'>
      <div className='container mx-auto'>
        <ScrollReveal>
          <h2 className='section-heading'>
            Projects
          </h2>
        </ScrollReveal>
        <div className='space-y-16'>
          {
            projects.map((project, index) => (
                <div key={index}>
                  <div className={cn('flex justify-center items-center gap-16',
                  `${index % 2 == 1 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'}`
                  )}>
                    <ScrollReveal className='inline-block md:flex-none'>
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        className='h-80 w-auto max-w-full object-cover border rounded-md border-accent' 
                      />
                    </ScrollReveal>
                    <ScrollReveal>
                      <div className='space-y-2'>
                        <h3 className='text-xl md:text-3xl font-medium'>{project.name}</h3>
                        <p className='text-muted-foreground'>{project.description}</p>
                        <p className='text-accent text-lg font-medium'>{project.stack}</p>
                        <a href={project.git}>
                          <div className='inline-flex p-2 rounded-full hover:bg-secondary/15 hover:text-accent transition-colors'>
                            <FaGithub className='h-6 w-6'/>
                          </div>
                        </a>
                      </div>
                    </ScrollReveal>
                  </div>
                  <div className='border-b border-border w-full mt-16'></div>
                </div>
            )) 
          }
        </div>
      </div>
    </section>
  )
}

export default Projects