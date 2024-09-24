import React, { useState, useEffect} from 'react';
import { useScroll, animated } from '@react-spring/web'
import { useTrail, a } from '@react-spring/web';
import styles from '../styles.module.css'
import { Grid2 } from '@mui/material';

// function Scroll() {
//     const { scrollYProgress } = useScroll()
  
//     return (
//       <animated.div style={{ opacity: scrollYProgress, marginBottom :"250px", color: "black" }}>
//         Developer. Musician. Educator.
//       </animated.div>
//     )
//   }

function Scroll() {
    const [opacity, setOpacity] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpacity(1); // Set opacity to 1 after a delay
      }, 500); // Adjust the delay to control the timing (in milliseconds)
  
      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }, []);
  
    return (
      <animated.div
        style={{
          opacity, // Opacity transitions from 0 to 1 over time
          marginBottom: "250px",
          color: "black",
          transition: 'opacity 2s ease-in-out', // Transition effect for smooth fade-in
        }}
      >
        Software Engineer. Musician.
      </animated.div>
    );
  }
  
  
const Trail = ({ open, children }) => {
const items = React.Children.toArray(children);
const trail = useTrail(items.length, {
    config: { mass: 100, tension: 3000, friction: 500 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
});

return (
    <Grid2>
    {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
        <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
    ))}
    </Grid2>
);
};

export function Hero() {
    const [open, set] = useState(true);
    return (
        <Grid2 item className="App-header" style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Grid2 className={styles.container} onClick={() => set((state) => !state)}>
                <Trail open={open}>
                    <span>Hello!</span>
                    <span>I'm</span>
                    <span>Nicole</span>
                    <span>Davis</span>
                </Trail>
            </Grid2>
            <Scroll />
        </Grid2>
    );
}