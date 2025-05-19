import React from 'react';
import { motion } from 'framer-motion';

const Cloud = ({ src, top, delay,}) => {
  return (
    <motion.img
      src={src}
      alt="Cloud"
      className="absolute w-32 opacity-80"
      style={{ top}}
      initial={{ x: -150 }}
      animate={{ x: 8000 }} //adjust according to world width
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    />
  );
};

export default Cloud;