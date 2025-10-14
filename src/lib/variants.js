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