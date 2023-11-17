import React from 'react'
import { motion } from 'framer-motion'

function Box3() {
    //Box Variant
    const boxVariant = {
        gBig : {
            x: 400,
            scale: 1.4,
            backgroundColor: "yellow"
        },
        gSmall : {
            x: 500,
            scale: 0.3
        }
    }

  return (
    <div className='box-container'>
        <motion.div
            className='box'
            variants={boxVariant}
            animate="gSmall"
            
            //additions:
            transition={{
                type: "spring",
                //stiffness: 100,
                damping: 70
            }}
            whileTap={{
                scale: 10,
                backgroundColor: "green"
            }}

            //practice:
            // whileTap={{
            //     scaleX: 50
            // }}
            // whileHover={{
            //     scaleY: 10
            // }}

            //you can also do this:
            // initial="gBig"
            // animate="gSmall"
        >
        </motion.div>
    </div>
  )
}

export default Box3


/*
*Variants Prop*
    Variants contain a key-vale pair - the key is given a name of your choice, 
        while the value contains your css style you want to use.

*/


// 44mins
