
import { useSpring, animated } from 'react-spring';

const InfiniteLoop = () => {
  const loopStyles = useSpring({
    loop: { reverse: true },
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.5)' },
  });

  return <animated.div style={loopStyles}>I loop infinitely!</animated.div>;
};

export default InfiniteLoop;
