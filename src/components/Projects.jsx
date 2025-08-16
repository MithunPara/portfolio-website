import React from 'react'
import project1 from "../assets/gymbuddy-logo.png"
import gymbuddy from "../assets/GymBuddy Homepage.png"
import { FaGithub } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
    <div className='py-24 relative'>
      <div className='container mx-auto'>
        <h2 className='section-heading'>
          Projects
        </h2>
        <div className='space-y-18'>
          {
            projects.map((project, index) => (
              <div key={index} className={cn('flex justify-center items-center gap-16',
                `${index % 2 == 1 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'}`
              )}>
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  className='h-96 w-auto object-cover border rounded-md border-accent' 
                />
                <div className='space-y-2'>
                  <h3 className='text-xl md:text-3xl font-medium'>{project.name}</h3>
                  <p className='text-muted-foreground'>{project.description}</p>
                  <p className='text-accent text-lg'>{project.stack}</p>
                  <a href={project.git}>
                    <FaGithub className='h-6 w-6 '/>
                  </a>
                </div>
              </div>
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export default Projects