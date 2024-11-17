import './App.css';
import AnimatedTransition from './components/Animated Transitions';
import FadeIn from './components/Basic Fade-In Animation';
import HoverEffect from './components/Hover Effects';
import InfiniteLoop from './components/Infinite Loop Animation';
import KeyframeAnimation from './components/Keyframe Animation';
import ParallaxEffect from './components/Parallax Scrolling';
import SlideIn from './components/Slide-In Animation';
import StaggeredAnimation from './components/Staggered Animation';
import ToggleAnimation from './components/Toggle Animation';

function App() {
  return (
    <div>
      <FadeIn />
      <SlideIn />
      <HoverEffect />
      <ToggleAnimation />
      <StaggeredAnimation />
      <KeyframeAnimation />
      <AnimatedTransition />
      <InfiniteLoop />
      <div>
        <ParallaxEffect />
      </div>
    </div>
  );
}

export default App;
