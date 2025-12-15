import React from 'react';
import { FallingNa as FallingNaType } from '../types';

interface FallingNaProps {
  na: FallingNaType;
}

const FallingNa: React.FC<FallingNaProps> = ({ na }) => {
  return (
    <span
      key={na.id}
      className={`absolute top-0 text-pink-500 font-black drop-shadow-[0_4px_0_rgba(236,72,153,0.5)] z-0 pointer-events-none select-none ${na.animationClass}`}
      style={{
        left: na.left,
        fontSize: na.size,
        animationDuration: na.duration,
        fontFamily: '"Zen Maru Gothic", sans-serif',
        WebkitTextStroke: '4px white',
        paintOrder: 'stroke fill',
      }}
    >
      な
    </span>
  );
};

export default FallingNa;