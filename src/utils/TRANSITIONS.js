export const TRANSITIONS = {
    default: {
        duration: 0.3,
        variants: {
            initialState:{
                opacity: 0,
                transform: "translateY(1em)",
            },
            animateState:{
                opacity: 1,
                transform: "translateY(0em)",
            },
            exitState:{
            }
        }
    },
    fade: {
        duration: 0.3,
        variants: {
            initialState:{
                opacity: 0,
            },
            animateState:{
                opacity: 1,
            },
            exitState:{
            }
        }
    },
    flip: {
        duration: 1,
        variants: {
            initialState:{
                rotateY: 0,
            },
            animateState:{
                rotateY: 360,
            },
            exitState:{
            }
        }
    },
    scale: {
        duration: 0.6,
        variants: {
            initialState:{
                opacity: 0,
            },
            animateState:{
                opacity: 1,
            },
            exitState:{
                transform: "scale(6)",
                opacity: 0,
            }
        }
    },
    curtain: {
        duration: 0.8,
        variants: {
            initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },    
            animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
        }
    },
    circle: {
        duration: 0.8,
        variants: {
            initialState: {
                opacity: 0,
                clipPath: "circle(50% at 50% 50%)",
            },    
            animateState: {
                opacity: 1,
                clipPath: "circle(50% at 50% 50%)",
            },
            exitState: {
                clipPath: "circle(0.0% at 50% 50%)",
            },
        }
    }
}