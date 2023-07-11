import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Shape, ExtrudeGeometry, MeshPhongMaterial, ShaderMaterial, TorusGeometry } from 'three';
import * as THREE from "three";

const HeroShape = ({ position, thickness, rotationSpeed = 0.5, radius, shapeType , wireframe=false, color='(0.0, 0.5, 0.5)'}) => {
  const meshRef = useRef();
  const materialRef = useRef();

  const [xSpeed, ySpeed, zSpeed] = [
    Math.random() * rotationSpeed - rotationSpeed / 2,
    Math.random() * rotationSpeed - rotationSpeed / 2,
    Math.random() * rotationSpeed - rotationSpeed / 2,
  ];
  // generate a random boboffset in all directions
  const [xBobOffset, yBobOffset, zBobOffset] = [
    Math.random() * 2 * Math.PI,
    Math.random() * 2 * Math.PI,
    Math.random() * 2 * Math.PI,
  ];

  const uTimeOffset = Math.random() * 3;

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * xSpeed;
    meshRef.current.rotation.y += delta * ySpeed;
    meshRef.current.rotation.z += delta * zSpeed;

    meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + xBobOffset) * 0.25;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + yBobOffset) * 0.25;
    meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.5 + zBobOffset) * 0.25;
  
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime + uTimeOffset;
  });

  useEffect(() => {
    const createGeometry = () => {
      const shape = new Shape();

      switch (shapeType) {
        case 'add':
          shape.moveTo(-2, -1);
          shape.lineTo(-1, -2);
          shape.lineTo(0, -1);
          shape.lineTo(1, -2);
          shape.lineTo(2, -1);
          shape.lineTo(1, 0);
          shape.lineTo(2, 1);
          shape.lineTo(1, 2);
          shape.lineTo(0, 1);
          shape.lineTo(-1, 2);
          shape.lineTo(-2, 1);
          shape.lineTo(-1, 0);
          break;
        case 'minus':
          shape.moveTo(-2, -1);
          shape.lineTo(2, -1);
          shape.lineTo(2, 1);
          shape.lineTo(-2, 1);
          break;
        case 'pacman':
          shape.moveTo(0, 0);
          shape.arc(0, 0, radius, 0, (3/2) * Math.PI, false);
          shape.lineTo(0, 0);
          break;
        case 'triangle':
          shape.moveTo(-2, -1);
          shape.lineTo(2, -1);
          shape.lineTo(0, 2); 
          break;
        case 'square':
          shape.moveTo(-2, -2);
          shape.lineTo(2, -2);
          shape.lineTo(2, 2);
          shape.lineTo(-2, 2);
          break;
        case 'zigzag':
          shape.moveTo(0, 0);
          shape.lineTo(1, 0);
          shape.lineTo(1, 2);
          shape.lineTo(0, 2);
          shape.lineTo(0, 1);
          shape.lineTo(-1, 1);
          shape.lineTo(-1, 0);
          shape.lineTo(-2, 0);
          shape.lineTo(-2, -1);
          shape.lineTo(0, -1);
          break;
        case 'hexagon':
          shape.moveTo(0, -2);
          shape.lineTo(1.73, -1);
          shape.lineTo(1.73, 1);
          shape.lineTo(0, 2);
          shape.lineTo(-1.73, 1);
          shape.lineTo(-1.73, -1);
          shape.lineTo(0, -2);
          break;
        case 'lightning':
          shape.moveTo(-1, 1);
          shape.lineTo(-0.25, 0);
          shape.lineTo(-0.75, 0);
          shape.lineTo(1, -2);
          shape.lineTo(0.5, 0);
          shape.lineTo(1, 0);
          shape.lineTo(0, 1);
          break;
        case 'wave':
          shape.moveTo(-1.5, 1);
          shape.quadraticCurveTo(-1.5, 1, -1, 0);
          shape.quadraticCurveTo(-0.5, -1, 0, 0);
          shape.quadraticCurveTo(0.5, 1, 1, 0);
          shape.quadraticCurveTo(1.5, -1, 2, 0);
          shape.moveTo(-1.5, 1);
          break;
          
        default:
          console.log('Invalid shape type.');
      }
      


      const extrudeSettings = {
        depth: thickness,
        bevelEnabled: shapeType === 'add' ? true : false,
        bevelSegments: 6,
        steps: 1,
        bevelSize: 0.5,
        bevelThickness: 1,
      };

      const geometry = new ExtrudeGeometry(shape, extrudeSettings);
      
      const vertexShader = `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uMousePosition;

        void main() {
          vUv = uv;

          // Calculate the distance between the current vertex position and the mouse position
          float distance = length(position - uMousePosition);

          // Calculate the displacement amount based on the distance and time
          float displacement = sin(distance * 10.0 + uTime) * 0.1;

          // Apply the displacement to the vertex position
          vec3 displacedPosition = position + normal * displacement;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
        }
      `;

      const fragmentShader = `
        varying vec2 vUv;
        uniform float uMultiplier;
        uniform float uAlpha;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uTime;

        void main() {
            float deltaTime = uTime * 0.25;
            vec2 mulvUv = mod(vUv * uMultiplier, 1.0);
            float strength = step(0.25, mod(mulvUv.y + deltaTime, 1.0));
            vec3 mixColor = mix(uColorA, uColorB, step(0.25, mulvUv.y));

            // Show teal color in areas without color
            vec3 tealColor = vec3${color};
            mixColor = mix(mixColor, tealColor, step(0.25, mulvUv.y));

            gl_FragColor.rgba = vec4(mixColor, min(strength, uAlpha));
        }
      `;

      
      const material = new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uMultiplier: { value: 1.0 },
          uAlpha: { value: 1 },
          uColorA: { value: new THREE.Color(0x095d66) },
          uColorB: { value: new THREE.Color(0xdd904f) },
          uTime: { value: 0 },
        },
        wireframe: wireframe,
      });

      materialRef.current = material; 
      const mesh = new Mesh(geometry, material);
      meshRef.current.add(mesh);
    };

    createGeometry();
  }, [shapeType, radius, thickness]);

  return <mesh ref={meshRef} position={position} />;
};

function lerpArrays(input, target) {
  const lowerKey = parseInt(Object.keys(input)[0]);
  const upperKey = parseInt(Object.keys(input)[1]);

  const lowerArray = input[lowerKey];
  const upperArray = input[upperKey];

  if (target < lowerKey) {
    return lowerArray;
  } else if (target > upperKey) {
    return upperArray;
  }

  const t = (target - lowerKey) / (upperKey - lowerKey);
  const result = lowerArray.map((value, index) => {
    const interpolatedValue = value + (upperArray[index] - value) * t;
    return interpolatedValue;
  });

  return result;
}

const HeroShapes = ({ screenWidth }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color={'orange'} />

      {/* Top Left */}
      <HeroShape position={lerpArrays({ 640: [6, 8, -14], 1536: [10, 12, -14] }, screenWidth)} thickness={0.75} shapeType='minus'/>
      <HeroShape position={lerpArrays({ 640: [13, 7, -12], 1536: [18, 8, -12] }, screenWidth)} thickness={0.75} shapeType='add' color='(0.7, 0.4, 0.2)'/>
      <HeroShape position={lerpArrays({ 640: [8, 1, -10], 1536: [7, 3, -8] }, screenWidth)} thickness={0.75} shapeType='pacman'  />
      <HeroShape position={lerpArrays({ 640: [0, 10, -16], 1536: [4, 8, -16] }, screenWidth)} thickness={0.75} shapeType='lightning' color='(0.7, 0.4, 0.2)'/>
      <HeroShape position={lerpArrays({ 640: [15, 0, -18], 1536: [26, 2, -18] }, screenWidth)} thickness={0.75} shapeType='hexagon'/>
      
      {/* Bottom Right */}
      <HeroShape position={lerpArrays({ 640: [-18, -10, -16], 1536: [-25, -10, -16] }, screenWidth)} thickness={0.75} shapeType='add'/>
      <HeroShape position={lerpArrays({ 640: [-3, -12, -14], 1536: [-10, -12, -14] }, screenWidth)} thickness={0.75} shapeType='pacman'/>
      <HeroShape position={lerpArrays({ 640: [-8, -2, -12], 1536: [-15, -3, -12] }, screenWidth)} thickness={1} shapeType='wave'/>
      <HeroShape position={lerpArrays({ 640: [-5, -8, -18], 1536: [-15, -10, -18] }, screenWidth)} thickness={1} shapeType='zigzag'color='(0.7, 0.4, 0.2)'/>
      <HeroShape position={lerpArrays({ 640: [-20, 0, -20], 1536: [-30, 0, -20] }, screenWidth)} thickness={1} shapeType='triangle' color='(0.7, 0.4, 0.2)'/>
      <HeroShape position={lerpArrays({ 640: [-15, 3, -24], 1536: [-20, 3, -24] }, screenWidth)} thickness={1} shapeType='zigzag' wireframe={true}/>
      <HeroShape position={lerpArrays({ 640: [-7, -2, -22], 1536: [-10, -3, -22] }, screenWidth)} thickness={1} shapeType='hexagon' color='(0.7, 0.4, 0.2)' wireframe={true}/>

      {/* Center */}
      <HeroShape position={lerpArrays({ 640: [-5, -5, -30], 1536: [-5, -5, -30] }, screenWidth)} thickness={0.75} shapeType="square" color="(0.7, 0.4, 0.2)" wireframe={true}/>
      <HeroShape position={lerpArrays({ 640: [5, -5, -30], 1536: [5, -5, -30] }, screenWidth)} thickness={0.75} shapeType="zigzag" wireframe={true}/>
      <HeroShape position={lerpArrays({ 640: [-5, 5, -30], 1536: [-5, 5, -30] }, screenWidth)} thickness={0.75} shapeType="pacman" wireframe={true}/>
      <HeroShape position={lerpArrays({ 640: [5, 5, -30], 1536: [5, 5, -30] }, screenWidth)} thickness={0.75} shapeType="triangle" color="(0.7, 0.4, 0.2)" wireframe={true}/>

    
    </Canvas>
  );
};

export default HeroShapes;
