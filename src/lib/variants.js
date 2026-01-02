export const slideUp = () => ({
    hidden: {
        opacity: 0,
        y: 75
    },
    visible: {
        opacity: 1,
        y: 0
    }
})

export const reveal = () => ({
    hidden: {
        left: 0
    },
    visible: {
        left: "100%"
    }
})

// export const marqueeVariants = () => ({
//     animate: {
//         x: ["0%", "-100%"],
//         transition: {
//             x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 10,
//                 ease: "linear"
//             }
//         }
//     }
// })

export const hoverParent = {
    initial: {},
    animate: {}
}

export const fadeScaleUp = () => ({
  initial: {
    opacity: 0,
    y: 6,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: `
    0 10px 30px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.08)
    `,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.95,
    transition: { duration: 0.3 }
  },
});