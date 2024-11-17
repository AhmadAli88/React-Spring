import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const AnimatedTransition = () => {
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {transitions((style, item) =>
        item ? <animated.div style={style}>I am transitioning!</animated.div> : null
      )}
    </div>
  );
};

export default AnimatedTransition;
