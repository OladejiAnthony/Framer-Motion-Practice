import React from 'react'
import { motion, useAnimation } from 'framer-motion'

function Box6() {
//useAnimation Hook(practice Gestures: Events)

  const control = useAnimation()

  return (
    <div className='box-container'>
      <button onClick={()=> {
        control.start({
            x: 900,
            transition: {duration: 2}
        })
      }}>
        Move Right
      </button>
      <button onClick={()=> {
        control.start({
            x: 0,
            transition: {duration: 2}
        })
      }}>
        Move Left
      </button>
      <button onClick={()=> {
        control.start({
            transition: {duration: 1},
            borderRadius: "50%"
        })
      }}>
        Circle
      </button>
      <button onClick={()=> {
        control.start({
            borderRadius: 0,
            transition: {duration: 1}
        })
      }}>
        Square
      </button>
      <button onClick={()=> {
        control.stop({})
      }}>
        Stop
      </button>

      <motion.div
        className='box'
        animate={control}
      >
      </motion.div>
    </div>
  )
}

export default Box6

