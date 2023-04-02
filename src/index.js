import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TRANSITIONS } from './utils/TRANSITIONS'
import routerEvents from 'next-router-events'

const NextjsTransition = ({ 
    children, 
    router,
    animation = "default",
    duration,
    isCustom = false,
    customAnimation,
}) => {

    const [routerApi, setRouterApi] = useState('/')

    const logUrl = url => {
        console.log("url change", url)
        setRouterApi(url)
    }

    routerEvents.on('routeChangeComplete', logUrl)
    
    return (
        <AnimatePresence mode="wait" >
            <motion.div
                key={routerApi}
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