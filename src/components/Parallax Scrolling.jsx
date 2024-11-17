
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxEffect = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: 'lightblue' }}>
        <h1>Welcome to Page 1</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: 'lightgreen' }}>
        <h1>Welcome to Page 2</h1>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxEffect;
