import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

function sigmoid(x, alpha = 0, beta = 1) {
  return 1 / (1 + Math.exp(-beta * (x - alpha)));
}


const Stars = (props) => {
  const ref = useRef();

  // Create a 2D grid of points with the wave effect on the z dimension
  const count = 15; // Number of points along one axis
  const separation = 0.5; // Distance between points
  const grid = useMemo(() => {
    let positions = [];
    for (let x = -count / 2; x < count / 2; x++) {
      for (let z = -count / 2; z < count / 2; z++) {
        // Initial z position is set here
        positions.push(x * separation, 0, z * separation);
      }
    }
    return new Float32Array(positions);
  }, [count, separation]);

  // Animate the z position for the wave effect
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      let xIndex = i;
      let zIndex = i + 2;

      let x = positions[xIndex];
      let originalZ = ((zIndex / 3) % count - count / 2) * separation;

      // Calculate wave based on x position and time
      let wave = Math.sin((x + time) * 2) + 0.5 * Math.sin((x + time) * 4) + 0.25 * Math.sin((x + time) * 6);


      // Set the new z position based on the original position plus the wave effect
      positions[zIndex] = originalZ + (wave < 0 ? wave : 0) * 0.025;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={[Math.PI * 0.5, 0, 0]}>
      <Points ref={ref} positions={grid} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#a0a0a0'
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const GridCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default GridCanvas;
