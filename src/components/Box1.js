import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className='box-container'>
      <motion.div 
        className='box'
        onClick={()=> setIsAnimating(!isAnimating)}
        initial={{
          opacity: 0.4
        }}   //OR use style={{opacity: 0.2}}
        animate={{
          x: isAnimating ? 1000 : 0,
          opacity: isAnimating ? 2 : 0.4,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 40,
          //delay: 3

          //type: "tween",
          //duration: 2
        }}
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


//Animate Prop
//Changing Location, Opacity, Rolling Effect, Spring

//CSS Animation :
//CSS animation is used to change the style of elements; gradually change from one STYLE to another.
//To use CSS animation, you must first specify some keyframes for the animation.

//CSS Transitions :
//CSS transitions is used to change the property-value of elements with respect to TIME/SPEED; 
//you change property values of elements smoothly, over a given duration. e.g {transition: width 2s, height 2s, transform 2s;}
//To create a transition effect, you must specify two things:
// a. the CSS property you want to add an effect to 
// b. the duration of the effect

//CSS Transforms :
//CSS Transforms allow you to change the SHAPE & LOCATION of an element.
//it allow you to move, rotate, scale, and skew elements.
//e,g translate(), rotate(), scaleX(), scaleY(), scale(), skewX(), skewY(), skew(), matrix()

