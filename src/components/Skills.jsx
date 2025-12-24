"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { marqueeVariants } from '@/lib/variants';
import MarqueeItem from './Marquee/MarqueeItem';

const Skills = () => {
    const languagesMarquee = [
        {
            src: "/technologies/c.svg",
            name: 'C'
        },
        {
            src: "/technologies/csharp.svg",
            name: 'C Sharp'
        },
        {
            src: "/technologies/css.svg",
            name: 'CSS'
        },
        {
            src: "/technologies/html-5.svg",
            name: 'HTML5'
        },
        {
            src: "/technologies/java.svg",
            name: 'Java'
        },
        {
            src: "/technologies/javascript.svg",
            name: 'JavaScript'
        },
        {
            src: "/technologies/typescript.svg",
            name: 'TypeScript'
        },
        {
            src: "/technologies/python.svg",
            name: 'Python'
        },
        {
            src: "/technologies/golang.svg",
            name: 'Golang'
        }   
    ];

    const frameworksMarquee = [

    ];

    const toolsMarquee = [

    ];

    const controls = useAnimation();

    useEffect(() => {
        controls.start('animate')
    }, [controls])

  return (
    <div className='py-24 relative'>
        <div className='container mx-auto'>
            <h2 className='section-heading'>
                Skills
            </h2>
            <div className='overflow-x-hidden border'>
                <motion.div 
                    variants={marqueeVariants()}
                    animate={controls}
                    onMouseEnter={() => controls.stop()}
                    onMouseLeave={() => controls.start('animate')}
                    className='flex'
                >
                    {[...languagesMarquee, ...languagesMarquee].map((item, index) => (
                        <MarqueeItem 
                            key={`${item.name}-${index}`}
                            src={item.src}
                            name={item.name}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Skills