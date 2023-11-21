import { Suspense, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { styles } from '../../styles';

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(2500), {radius: 1})
  
  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 10;
    ref.current.rotation.x -= delta / 20;
  })

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref = {ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#cc8447'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  );
}

export default StarsCanvas;