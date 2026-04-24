import React from 'react'
import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import ScrollReveal from './ScrollReveal';
import { smoothScrollTo } from '@/lib/smoothScroll';

const About = () => {
  return (
    <section id='about' className='py-12 md:py-24 relative scroll-mt-24'>
        <div className='container mx-auto'>
            <ScrollReveal>
                <h2 className='section-heading'>
                    About <span className='text-secondary'>Me</span>
                </h2>
            </ScrollReveal>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                <div className='space-y-5'>
                    <ScrollReveal>
                        <p className='mb-4'>
                            Recent Software Engineering graduate from McMaster University with experience in building
                            full-stack applications, machine learning projects, and mobile development. Through co-op roles, I have had the opportunity
                            to work on large-scale systems and collaborative industry projects, gaining exposure to real-world software challenges.
                        </p>
                        <p>
                            I enjoy creating scalable, user-focused applications and continuously expanding my skillset to tackle
                            complex problems and deliver impactful software.  
                        </p>
                    </ScrollReveal>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 pt-4'>
                        {/* Set curtain to false to prevent the reveal overlay from rendering and trimming off the button edges due to overlay/hidden overflow */}
                        <ScrollReveal curtain={false} className='block w-fit'>
                            <a href='#contact' onClick={(e) => smoothScrollTo(e, "#contact")} className='button accent-button px-8 py-2 md:px-6 inline-flex items-center justify-center gap-2'>Contact</a>
                        </ScrollReveal>
                        <ScrollReveal curtain={false} className='block w-fit'>
                            <a href='#resume' onClick={(e) => smoothScrollTo(e, "#resume")} className='button accent-button px-8 py-2 md:px-6 inline-flex items-center justify-center gap-2'>Resume</a>
                        </ScrollReveal>
                    </div>
                </div>
                <div className='space-y-6'>
                    <ScrollReveal>
                        <div className='card-hover gradient-border p-4 hover:border-accent/40'>
                            <div className='flex items-start gap-6'>
                                <div className='self-center rounded-full p-3 bg-secondary/15'>
                                    <FaGraduationCap className='h-5 w-5 text-accent' />
                                </div>
                                <div className='text-left text-sm sm:text-md'>
                                    <h4 className='text-lg font-semibold'>Education</h4>
                                    <p className='text-muted-foreground'>
                                        Software Engineering graduate from McMaster University. 
                                    </p>
                                    <p className='text-muted-foreground'>
                                        Strong foundation in data structures, system design, and modern development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className='card-hover gradient-border p-4 hover:border-accent/40'>
                            <div className='flex items-start gap-6'>
                                <div className='self-center rounded-full p-3 bg-secondary/15'>
                                    <FaCode className='h-5 w-5 text-accent' />
                                </div>
                                <div className='text-left text-sm sm:text-md'>
                                    <h4 className='text-lg font-semibold'>Skills</h4>
                                    <p className="text-muted-foreground">
                                        Full-stack developer experienced with modern frameworks and tools.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Focused on building responsive, scalable, and user-friendly applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className='card-hover gradient-border p-4 hover:border-accent/40'>
                            <div className='flex items-start gap-6'>
                                <div className='self-center rounded-full p-3 bg-secondary/15'>
                                    <FaBriefcase className='h-5 w-5 text-accent' />
                                </div>
                                <div className='text-left text-sm sm:text-md'>
                                    <h4 className='text-lg font-semibold'>Experience</h4>
                                    <p className="text-muted-foreground">
                                        Co-op experience across industry and research environments.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Worked on large-scale systems, web applications, and collaborative projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About