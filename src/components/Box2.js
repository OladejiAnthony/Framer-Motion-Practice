import React from 'react'
import { motion } from 'framer-motion'

function Box2() {
    //Framer Motion Gestures : Events and Drag
  return (
    <div className='box-container'>
        <motion.div
            className='box'
            whileHover={{
                scale: 1.4,
                
            }}
            whileTap={{
                scale: 0.2,
                backgroundColor: "greenyellow"
            }}
            drag
            //OR you can also do this: drag="x" or drag="y"
            dragConstraints={{
                left: 20,
                right: 20,
                top: 20,
                down: 20
            }}
            
        >
        </motion.div>
    </div>
  )
}

export default Box2


/*
*Events & Drag Prop*
    Events - whileHover, whileFocus, whileTap, whileDrag, whileInView etc 
    Drag - dragConstraints, dragControls, draggable, dragListener etc
*/


