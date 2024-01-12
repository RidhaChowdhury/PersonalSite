import { Suspense, useRef, useMemo, useEffect, useState } from 'react'; // Updated: Added useEffect and useState
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

const rotationFactor = [-1, -2, -3]; // Control the rotation speed
const normalizedRotationFactor = rotationFactor.map((e) => e / Math.hypot(...rotationFactor));

const Dot = (props) => {
  const ref = useRef();
  const [scroll, setScroll] = useState(0);

  // Updated: Scroll event handler that updates the scrollY state
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    // Updated: Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Updated: Return a cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  useFrame(() => {
    // Updated: Rotate the group ref based on the scroll position
    if (ref.current) {
      const rotationSpeed = 0.00075;
      ref.current.rotation.x = scroll * normalizedRotationFactor[0] * rotationSpeed;
      // ref.current.rotation.y = scroll * normalizedRotationFactor[1] * rotationSpeed;
      // ref.current.rotation.z = scroll * normalizedRotationFactor[2] * rotationSpeed;
    }
  });

  // Original grid creation logic remains the same
  const count = 10;
  const separation = 0.75;
  
  // Original y positions memo remains the same

  const grid = useMemo(() => {
    let positions = [];
    for (let x = -count / 2; x < count / 2; x++) {
      for (let y = -count / 2; y < count / 2; y++) {
        for (let z = -count / 2; z < count / 2; z++) {
          positions.push(x * separation, y * separation, z * separation);
        }
      }
    }
    return new Float32Array(positions);
  }, [count, separation]);

  // Original return statement remains the same
  return (
    <group ref={ref} rotation={[0, 0, 0]}>
      <Points positions={grid} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#c36312'
          opacity={0.5}
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Box = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Dot />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Box;
