import React from 'react'
import { FaCode } from "react-icons/fa";
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id='about' className='py-24 relative scroll-mt-24'>
        <div className='container mx-auto'>
            <ScrollReveal>
                <h2 className='section-heading'>
                    About <span className='text-secondary'>Me</span>
                </h2>
            </ScrollReveal>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                <div className='space-y-5'>
                    <ScrollReveal>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut posuere metus sit amet urna cursus, et commodo justo sagittis. 
                            Nunc aliquet erat eget dolor malesuada, ac commodo felis mattis. 
                        </p>
                        <p>
                            Praesent elit neque, commodo eu leo in, molestie molestie libero. 
                            Nullam at varius risus. Sed nec gravida enim, vel sollicitudin nunc. 
                            Morbi eu ante lacinia nulla viverra eleifend. Duis facilisis sodales tempus. 
                            Duis molestie velit ac elementum mattis.
                        </p>
                    </ScrollReveal>
                    <div className='flex flex-col sm:flex-row justify-center gap-20 pt-4'>
                        {/* Set curtain to false to prevent the reveal overlay from rendering and trimming off the button edges due to overlay/hidden overflow */}
                        <ScrollReveal curtain={false} className='block w-fit'>
                            <a href='#contact' className='button accent-button px-4 py-2 md:px-6 inline-flex items-center justify-center gap-2'>Contact</a>
                        </ScrollReveal>
                        <ScrollReveal curtain={false} className='block w-fit'>
                            <a href='#resume' className='button accent-button px-4 py-2 md:px-6 inline-flex items-center justify-center gap-2'>Resume</a>
                        </ScrollReveal>
                    </div>
                </div>
                <div className='space-y-6'>
                    <ScrollReveal>
                        <div className='card-hover gradient-border p-4'>
                            <div className='flex items-start gap-6'>
                                <div className='self-center rounded-full p-3 bg-secondary/15'>
                                    <FaCode className='h-5 w-5 text-accent' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-lg font-semibold'>Education</h4>
                                    <p className='text-muted-foreground'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Integer varius imperdiet mauris, id malesuada enim tempor eget. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className='card-hover gradient-border p-4'>
                            <div className='flex items-start gap-6'>
                                <div className='self-center rounded-full p-3 bg-secondary/15'>
                                    <FaCode className='h-5 w-5 text-accent' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-lg font-semibold'>Skills</h4>
                                    <p className='text-muted-foreground'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Integer varius imperdiet mauris, id malesuada enim tempor eget. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className='card-hover gradient-border p-4'>
                            <div className='flex items-start gap-6'>
                                <div className='self-center rounded-full p-3 bg-secondary/15'>
                                    <FaCode className='h-5 w-5 text-accent' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='text-lg font-semibold'>Experience</h4>
                                    <p className='text-muted-foreground'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Integer varius imperdiet mauris, id malesuada enim tempor eget. 
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