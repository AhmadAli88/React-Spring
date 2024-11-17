import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const HoverEffect = () => {
  const [isHovered, setHovered] = useState(false);
  const hoverStyles = useSpring({
    scale: isHovered ? 1.1 : 1,
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hoverStyles.scale.to((s) => `scale(${s})`),
        padding: '20px',
        background: 'lightblue',
        borderRadius: '10px',
        display: 'inline-block',
      }}
    >
      Hover Over Me!
    </animated.div>
  );
};

export default HoverEffect;
