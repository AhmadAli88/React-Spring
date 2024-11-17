
import { useTrail, animated } from 'react-spring';

const items = ['First', 'Second', 'Third'];

const StaggeredAnimation = () => {
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  return (
    <div>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default StaggeredAnimation;
