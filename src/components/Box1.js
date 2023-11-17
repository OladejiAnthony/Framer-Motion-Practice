import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box1() {
  //Animation state
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className='box-container'>
      <motion.div 
        className='box'
        onClick={()=> setIsAnimating(!isAnimating)}
        initial={{
          opacity: 0.4
        }}  
        //OR use style={{opacity: 0.2}}
        animate={{
          x: isAnimating ? 1000 : 0,
          opacity: isAnimating ? 2 : 0.4,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 40,   //delay: 3

          //OR use another type called "tween":
          //type: "tween",
          //duration: 2
        }}

        //practice:
        // animate={{
        //   //x: 1000 or x: "100vw" or "70rem"
        //   opacity: 0.4,
        //   rotate: 360,
        //   y: 100,
        //   backgroundColor: "yellow",
        //   scale: 2,
        // }}
        
      >
      </motion.div>
    </div>
  )
}

export default Box1



/* 
*Animate Prop*
A. is used to ANIMATE elements i.e change the "STYLE" of elements; gradually change from one STYLE to another
    e.g Direction, Color, Opacity, Text, Fonts etc 
B. is used to TRANSFORM elements i.e change the "SHAPE", "SIZE" & "POSITION" of an element
    CSS Transform allow you to move, rotate, scale, and skew elements.
    e,g translate(), rotate(), scaleX(), scaleY(), scale(), skewX(), skewY(), skew(), matrix()

*Transition Prop*
A. is used to perform operations relating to "TIME" & "DURATION" of an element animation
    CSS transitions is used to change the property-value of elements with respect to "TIME" & "SPEED"; 
    It allows us to change property values of elements smoothly, over a given duration. 
    e.g {transition: width 2s, height 2s, transform 2s;}

*/

/*
CSS Animation - we define chnage of Style
CSS Transform - we define change of Shape, Size, Position
CSS Transition - we define change of Time and Speed
*/