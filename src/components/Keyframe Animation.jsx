
import { useSpring, animated } from 'react-spring';

const KeyframeAnimation = () => {
  const keyframeStyles = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translateX(0%)' });
      await next({ transform: 'translateX(50%)' });
    },
  });

  return <animated.div style={keyframeStyles}>I move in keyframes!</animated.div>;
};

export default KeyframeAnimation;
