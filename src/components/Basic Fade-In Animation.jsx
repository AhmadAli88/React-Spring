    
import { useSpring, animated } from 'react-spring';

const FadeIn = () => {
  const fadeStyles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return <animated.div style={fadeStyles}>I am fading in!</animated.div>;
};

export default FadeIn;
