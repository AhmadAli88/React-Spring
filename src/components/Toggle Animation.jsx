import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ToggleAnimation = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleStyles = useSpring({
    opacity: isToggled ? 1 : 0,
    transform: isToggled ? 'scale(1)' : 'scale(0.5)',
  });

  return (
    <div>
      <button onClick={() => setToggled(!isToggled)}>Toggle</button>
      <animated.div style={toggleStyles}>I toggle visibility!</animated.div>
    </div>
  );
};

export default ToggleAnimation;
