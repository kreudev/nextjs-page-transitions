import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TRANSITIONS } from './utils/TRANSITIONS'

const NextjsTransition = ({ 
    children, 
    animation = "default",
    duration,
    isCustom = false,
    customAnimation,
}) => {
    
    return (
        <AnimatePresence mode="wait" >
            <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: duration || TRANSITIONS[animation].duration
                }}
                variants={ isCustom ? customAnimation : TRANSITIONS[animation].variants }
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export default NextjsTransition;