import React from 'react'
import { motion } from 'framer-motion';
import { fadeScaleUp } from '@/lib/variants';

const MarqueeItem = ({ src, name }) => {
  return (
    <div className="relative group px-6 flex-shrink-0">
      <img
        src={src}
        alt={name}
        className="h-30 w-auto cursor-pointer"
      />
      <motion.div
        variants={fadeScaleUp()}
        initial={'initial'}
        whileHover={'animate'}
        className="
          absolute left-1/2 top-full mt-3 -translate-x-1/2
          whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2
          text-xs text-white shadow-lg
          pointer-events-none
        "
      >
        <div className="font-medium">{name}</div>
      </motion.div>
    </div>
  )
}

export default MarqueeItem