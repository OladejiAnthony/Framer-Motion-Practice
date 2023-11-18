import React from 'react'
import { motion } from 'framer-motion'

function Box7() {
    const list ={
        hidden : {
            opacity: 1
        }
    }
    const item = {
        hidden : {
            x: 0,
            opacity: 1
        }
    }
  return (
    <div className='box-container'>
      <motion.ul
        className='box'
        animate="hidden"
        variants={list}
      >
        <motion.li variants={item} initial={{x: -20}} />
        <motion.li variants={item} initial={{x: -20}} />
        <motion.li variants={item} initial={{x: -20}} />
      </motion.ul>
    </div>
  )
}

export default Box7


