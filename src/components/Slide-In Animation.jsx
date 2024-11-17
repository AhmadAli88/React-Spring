
import { useSpring, animated } from 'react-spring';

const SlideIn = () => {
  const slideStyles = useSpring({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(0%)' } });

  return <animated.div style={slideStyles}>I am sliding in!</animated.div>;
};

export default SlideIn;
