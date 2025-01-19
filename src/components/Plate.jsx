/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import plateModel from '/plate.glb';

export default function Plate(props) {
  const plateRef = useRef();
  const { scene } = useGLTF(plateModel);

  useEffect(() => {
    gsap.to(plateRef.current.position, {
      x: -1.75,
      duration: 5,
      ease: 'power4.inOut',
    });
    scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (plateRef.current) {
      plateRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={plateRef} object={scene} {...props} />;
}
