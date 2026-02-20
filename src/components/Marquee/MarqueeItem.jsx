// import React from 'react'
// import { motion } from 'framer-motion';
// import { fadeScaleUp, hoverParent } from '@/lib/variants';

// const MarqueeItem = ({ src, name }) => {
//   return (
//     <motion.div 
//       className="relative px-6 flex-shrink-0 cursor-pointer"
//       variants={hoverParent}
//       initial={'initial'}
//       whileHover={'animate'}
//     >
//       <img
//         src={src}
//         alt={name}
//         className="h-30 w-auto block"
//       />
//       <motion.div
//         variants={fadeScaleUp()}
//         className="
//           absolute left-1/2 top-full mt-3 -translate-x-1/2
//           whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2
//           text-xs text-white shadow-lg
//           pointer-events-none
//         "
//       >
//         {name}
//       </motion.div>
//     </motion.div>
//   )
// }

// export default MarqueeItem

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"
import { fadeScaleUp } from "@/lib/variants"

const Tooltip = ({ children, rect }) => {
  if (!rect) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        variants={fadeScaleUp()}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "fixed",
          top: rect.top,
          left: rect.left + rect.width / 2,
          x: "-50%",    
          y: "-100%",    
          marginTop: -40, 
          background: "#18181b",
          color: "white",
          padding: "6px 10px",
          fontSize: "12px",
          borderRadius: "6px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          zIndex: 9999,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

const MarqueeItem = ({ src, name }) => {
  const ref = useRef(null)
  const [rect, setRect] = useState(null)

  return (
    <>
      <motion.div
        ref={ref}
        className="px-6 flex-shrink-0 cursor-pointer"
        onMouseEnter={() => setRect(ref.current.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
      >
        <img
          src={src}
          alt={name}
          className="h-30 w-auto block"
        />
      </motion.div>

      <Tooltip rect={rect}>{name}</Tooltip>
    </>
  )
}

export default MarqueeItem