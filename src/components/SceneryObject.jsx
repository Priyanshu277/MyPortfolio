import React from 'react';

const SceneryObject = ({ src, left, bottom = '96px', width = '100px', height='220px', speed=1, glow=false}) => {
  return (
    <img
      src={src}
      alt="Scenery"
      className="absolute"
      style={{
        left: left,
        bottom,
        width,
        height,
        zIndex: 1,
        filter: glow
          ? 'drop-shadow(0 0 24px #ffe066) drop-shadow(0 0 8px #fff)'
          : 'none',
        transition: 'filter 0.3s',
      }}
    />
  );
};

export default SceneryObject;
