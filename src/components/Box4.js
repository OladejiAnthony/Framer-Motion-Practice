import React from 'react'
import { motion } from 'framer-motion'

const Box4 = () => {
  //Parent Animation
  const boxVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren", //complete parent animation before the child begins its own animation.
        staggerChildren: 0.2,

        //Additions:
        //delayChildren: 1
        //staggerDirection: -1
      }
    }
  }
  //ChildList Animation
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,

      //Additions
      // transition: {
      //    repeat: 4,
      //    repeatType: "mirror",
      //    duration: 2,
      // }
    }
  }

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1,2,3].map(box => {
          return (
            <motion.li 
              className='boxItem'
              variants={listVariant}
            >
            </motion.li>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Box4


/*
*Variants Prop*
    Variants contain a key-vale pair - the key is given a name of your choice, 
        while the value contains your css style you want to use.
    Variants are used when you have two states(more than one) you want an element to undertake by 
      itself without the user performing any Event e.g Click, Hover etc
*/

