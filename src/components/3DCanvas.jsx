import React from 'react';
import '../css/WelcomeSection.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Object1 = (props) => {
  // Your object 1 definition
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Object2 = (props) => {
  // Your object 2 definition
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.75, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const Object3 = (props) => {
  // Your object 3 definition
  return (
    <mesh {...props}>
      <coneGeometry args={[0.5, 1.5, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const Canv = ({ position }) => {
  return (
    <div className='Three'>
      <Canvas>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Object1 position={[-2, 0, 0]} />
        <Object2 position={[0, 0, 0]} />
        <Object3 position={[2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Canv;