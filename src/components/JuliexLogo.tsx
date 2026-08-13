'use client';

import React from 'react';

interface JuliexLogoProps {
  className?: string;
  showText?: boolean;
}

export function JuliexLogo({
  className = '',
  showText = true,
}: JuliexLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-[43px] h-[43px] flex items-center justify-center border border-juliex-green/20 rounded-full text-juliex-green text-[21px] shrink-0">
        ⌂
      </div>
      
      {showText && (
        <div>
          <div className="font-serif text-[25px] leading-none text-juliex-green">
            Juliex
          </div>
          <div className="mt-[5px] text-[8px] tracking-[0.42em] text-[#777970] text-center uppercase">
            PROPERTY
          </div>
        </div>
      )}
    </div>
  );
}

