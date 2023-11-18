import React from 'react'
import { motion } from 'framer-motion'

function Sta() {
  //Scroll-Triggered animations

  return (
    <div className='box-container'>
      <motion.ul>
        <motion.li
            className='box'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        ></motion.li>
      </motion.ul>
      
    </div>
  )
}

export default Sta


//Scroll-Triggered animations
//Elements can animate as they enter and leave the viewport with the handy whileInView prop.

