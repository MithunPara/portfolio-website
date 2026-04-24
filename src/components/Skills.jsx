"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion';
// import { marqueeVariants } from '@/lib/variants';
import MarqueeItem from './Marquee/MarqueeItem';
import ScrollReveal from './ScrollReveal';

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
        },
        {
            src: "/technologies/sql-database.svg",
            name: 'SQL'
        }
    ];

    const frameworksToolsMarquee = [
        {
            src: "/technologies/docker.svg",
            name: 'Docker'
        },
        {
            src: "/technologies/expressjs.svg",
            name: 'Express.js'
        },
        {
            src: "/technologies/flask.svg",
            name: 'Flask'
        },
        {
            src: "/technologies/framer-motion.svg",
            name: 'Framer Motion'
        },
        {
            src: "/technologies/git.svg",
            name: 'Git'
        },
        {
            src: "/technologies/google-cloud.svg",
            name: 'Google Cloud Platform'
        },
        {
            src: "/technologies/mongodb.svg",
            name: 'MongoDB'
        },
        {
            src: "/technologies/next-js.svg",
            name: 'Next.js'
        },
        {
            src: "/technologies/node-js.svg",
            name: 'Node.js'
        },
        {
            src: "/technologies/postman-icon.svg",
            name: 'Postman'
        },
        {
            src: "/technologies/react.svg",
            name: 'React.js'
        },
        {
            src: "/technologies/tailwind.svg",
            name: 'Tailwind CSS'
        }
    ];

    const xLeft = useMotionValue(0)
    const xRight = useMotionValue(0)

    const leftAnimationRef = useRef(null)
    const rightAnimationRef = useRef(null)

    useEffect(() => {
        leftAnimationRef.current = animate(
            xLeft,
            ["0%", "-50%"],
            {
                duration: 16,
                ease: "linear",
                repeat: Infinity
            }
        )

        rightAnimationRef.current = animate(
            xRight,
            ["-50%", "0%"],
            {
                duration: 20,
                ease: "linear",
                repeat: Infinity
            }
        )
        return () => {
            leftAnimationRef.current?.stop()
            rightAnimationRef.current?.stop()
        }
    }, [])

  return (
    <div className='py-12 md:py-24 relative'>
        <div className='container mx-auto'>
            <ScrollReveal>
                <h2 className='section-heading'>
                    Skills
                </h2>
            </ScrollReveal>
            <ScrollReveal>
                <div className='overflow-x-hidden marquee-fade mt-12 md:mt-16'>
                    <motion.div 
                        className='flex w-max'
                        style={{ x: xLeft }}
                        onMouseEnter={() => {
                            leftAnimationRef.current?.pause()
                            rightAnimationRef.current?.pause()
                        }}
                        onMouseLeave={() => {
                            leftAnimationRef.current?.play()
                            rightAnimationRef.current?.play()
                        }}
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
            </ScrollReveal>
            <ScrollReveal>
                <div className='overflow-x-hidden marquee-fade mt-12'>
                    <motion.div 
                        className='flex w-max'
                        style={{ x: xRight }}
                        onMouseEnter={() => {
                            leftAnimationRef.current?.pause()
                            rightAnimationRef.current?.pause()
                        }}
                        onMouseLeave={() => {
                            leftAnimationRef.current?.play()
                            rightAnimationRef.current?.play()
                        }}
                    >
                        {[...frameworksToolsMarquee, ...frameworksToolsMarquee].map((item, index) => (
                            <MarqueeItem 
                                key={`${item.name}-${index}`}
                                src={item.src}
                                name={item.name}
                            />
                        ))}
                    </motion.div>
                </div>
            </ScrollReveal>
        </div>
    </div>
  )
}

export default Skills