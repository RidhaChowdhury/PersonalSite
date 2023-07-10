import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusGeometry, MeshPhongMaterial, Mesh } from 'three';

const TicTacToe = ({ position, thickness }) => {
    const meshRef = useRef();
    const [x, y, z] = position;
  
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta / (10 + x);
        meshRef.current.rotation.y += delta / (15 + y);
        meshRef.current.rotation.z += delta / (20 + z);
    });
  
    return (
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[3, thickness, 32, 32]} />
        <meshPhongMaterial color="teal" />
      </mesh>
    );
  };

const TicTacToeCanvas = ({wide}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Add your toruses here */}
      <TicTacToe position={wide ? [-15, 3, -10] : [-3, 3, -10]} thickness={1}/>
      <TicTacToe position={[-16, -4, -5]} thickness={1}/>
      {/* Add more toruses with different positions */}
    </Canvas>
  );
};

export { TicTacToeCanvas };
