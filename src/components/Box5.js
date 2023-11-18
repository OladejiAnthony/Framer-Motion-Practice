import React from 'react'
import { motion } from 'framer-motion'

function Box5() {
  //KeyFrames: Set a value as an array and Motion will animate through each of these values in turn.

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%","20%","50%","50%","20%",],
          rotate: [0, 0, 270, 270, 0]
        }}
        transition={{
          duration: 3
        }}
      >
      </motion.div>
    </div>
  )
}

export default Box5


/*  

*/
