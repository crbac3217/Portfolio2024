import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CelMaterial from './CelMaterial';

const BModel = ({ mouseX }) => {
  const { scene, animations } = useGLTF('/models/Gltf/B.glb');
  const modelRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);
        action.play();
      });
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.z = mouseX * 0.1;
    }
    mixerRef.current?.update(delta);
  });

  return <primitive ref={modelRef} object={scene} />;
};

const EModel = ({ mouseX }) => {
  const { scene } = useGLTF('/models/Gltf/E.glb');
  const modelRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = CelMaterial;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z = mouseX * 0.1;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

const NModel = ({ mouseX }) => {
  const { scene } = useGLTF('/models/Gltf/N.glb');
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z = mouseX * 0.1;
    }
  });
  return <primitive ref={modelRef} object={scene} />;
};

const Canv = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize mouse x position
    const y = (event.clientY / window.innerHeight) * 2 - 1; // Normalize mouse y position
    setMouseX(x);
    setMouseY(y);
    CelMaterial.uniforms.lightDirection.value.set(x, y, 1).normalize();
  };

  return (
    <div className='Three' onMouseMove={handleMouseMove} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 20] }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.setSize(window.innerWidth, window.innerHeight);
          gl.shadowMap.enabled = true;
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[mouseX * 10, mouseY * 10, 10]} intensity={50} distance={500} decay={1} />
        <group rotation={[-Math.PI / -2, 0, 0]}>
          <BModel mouseX={mouseX} position={[-2, 0, 0]} />
          <EModel mouseX={mouseX} position={[0, 0, 0]} />
          <NModel mouseX={mouseX} position={[2, 0, 0]} />
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Canv;
