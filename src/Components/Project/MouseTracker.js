import React from 'react';

export default function MouseTracker({ x, y, viewName, isVisible }) {
  return (
    isVisible && (
      <div
        style={{
          position: 'fixed',
          left: x + 'px',
          top: y + 'px',
          backgroundColor: 'blue',
          color: 'white',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          borderRadius: '200px',
          pointerEvents: 'none',
          width:"80px",
          height:"80px",
          transitionProperty:"left top",
          transitionDuration:"0.01s",
          transitionTimingFunction:"ease-in-out"
        }}
      >
        {viewName}
      </div>
    )
  );
}
