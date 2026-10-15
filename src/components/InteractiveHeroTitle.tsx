import React from 'react';
import TechText from './TechText';

export const InteractiveHeroTitle: React.FC = () => {
  return (
    <div className="w-full h-[150px] sm:h-[190px] lg:h-[225px] relative -ml-1 z-20">
      <h1 className="sr-only">Palak Chiraniya</h1>
      <TechText
        text={'PALAK\nCHIRANIYA'}
        fontWeight={800}
        fontSize={100}
        reveal="letter"
        dashLength={4}
        dashGap={2}
        specks={15}
        intro="none"
        introDuration={2}
        clickKick
        guides={false}
        fontFamily=""
        letterSpacing={-0.05}
        accentColor="#9DB7A5"
        reach={200}
        softness={0.7}
        lineStyle="dashed"
        strokeWidth={1.5}
        speed={1}
        bounce={0.4}
        selection
        labels={false}
        color="#F4F1EA"
        align="left"
        draggable={false}
        sweep={false}
      />
    </div>
  );
};
