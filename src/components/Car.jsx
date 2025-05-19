import React from 'react'
import {motion} from 'framer-motion'

const Car = ({ left, direction}) => {
  return (
    <motion.img
      src="/spr_formula_0.png"
      alt="Car"
      className="absolute bottom-20 w-24 z-10"
      animate={{ left }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      style={{
        position: 'absolute',
        transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
       }}
    />
  )
}

export default Car