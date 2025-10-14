"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { slideUp, reveal } from '@/lib/variants';
import { cn } from '@/lib/utils';

const ScrollReveal = ({ children, className, curtain = true }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.25, once: true })
    const slideControls = useAnimation()
    const revealControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            slideControls.start('visible')
            revealControls.start('visible')
        }
    }, [isInView])

  return (
    // add className to allow for overriding and adding styles from parent container within webpage components
    <div ref={ref} className={cn('relative', curtain && 'overflow-hidden', className)}>
        <motion.div
            variants={slideUp()}
            initial={'hidden'}
            animate={slideControls}
            transition={{ duration: 1, delay: 0.25 }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={reveal()}
            initial={'hidden'}
            animate={revealControls}
            transition={{duration: 0.75, ease: 'easeOut'}}
            className='absolute inset-0 bg-accent pointer-events-none'
            style={{ borderRadius: 'inherit' }}
            // className='absolute inset-y-0.5 inset-x-0 bg-accent'
        />
    </div>
  )
}

export default ScrollReveal