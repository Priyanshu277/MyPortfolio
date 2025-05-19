import React from 'react';

const WoodenSign = ({ text = "LeetCode", left = "0px", top = "610px", bottom = "100px" }) => {
  return (
    <div
      className="absolute w-30 h-17 bg-[#a47148] rounded-md border-4 border-[#5a2c0a] shadow-lg transform rotate-[-2deg] flex items-center justify-center text-white text-xl font-bold font-serif"
      style={{
        left: left,
        top: top,
        bottom: bottom,
      }}
    >
      <span className="z-10">{text}</span>
      
      {/* Wooden posts */}
      <div className="absolute -bottom-10 left-4 w-4 h-10 bg-[#5a2c0a] rounded-sm"></div>
      <div className="absolute -bottom-10 right-4 w-4 h-10 bg-[#5a2c0a] rounded-sm"></div>
    </div>
  );
};

export default WoodenSign;