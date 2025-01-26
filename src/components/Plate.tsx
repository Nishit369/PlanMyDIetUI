/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import plateModel from '/plate.glb';
import * as THREE from 'three';

export default function Plate(props: any) {
  const plateRef = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF(plateModel);

  useGLTF.preload(plateModel);

  useEffect(() => {
    if (plateRef.current) {
      gsap.to(plateRef.current.position, {
        x: -1.9,
        duration: 5,
        ease: 'power4.inOut',
      });
    }
    scene.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (plateRef.current) {
      plateRef.current.rotation.y += 0.0025;
    }
  });

  return <primitive ref={plateRef} object={scene} {...props} />;
}