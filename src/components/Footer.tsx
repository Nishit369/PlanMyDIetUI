/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { Text, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

const Footer: React.FC = () => {
  function Letters() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [gradientColor, setGradientColor] = useState(new THREE.Color(""));
    const [startTime, setStartTime] = useState<number>(Date.now());
    const {viewport} = useThree();

    const interpolateColor = (color1: THREE.Color, color2: THREE.Color, factor: number) => {
      return color1.clone().lerp(color2, factor);
    };

    const colors = ["hsla(345, 82.50%, 52.90%)", "hsl(340, 64.60%, 49.80%)"];
    const transitionDuration = 5000;

    useFrame(() => {
      const elapsedTime = Date.now() - startTime;
      const factor = (elapsedTime % transitionDuration) / transitionDuration;

      const index = Math.floor((elapsedTime / transitionDuration) * colors.length) % colors.length;
      const fromColor = new THREE.Color(colors[index]);
      const toColor = new THREE.Color(colors[(index + 1) % colors.length]);

      const interpolatedColor = interpolateColor(fromColor, toColor, factor);

      setGradientColor(interpolatedColor);
    });

    const letters = [
      { char: "P", position: [-viewport.width/2.3, -25.25, 0] },
      { char: "L", position: [-viewport.width/2.95, -25.25, 0] },
      { char: "A", position: [-viewport.width/4.15, -25.25, 0] },
      { char: "N", position: [-viewport.width/6.9, -25.25, 0] },
      { char: "M", position: [-viewport.width/27, -25.25, 0] },
      { char: "Y", position: [viewport.width/15, -25.25, 0] },
      { char: "D", position: [viewport.width/6, -25.25, 0] },
      { char: "I", position: [viewport.width/4.05, -25.25, 0] },
      { char: "E", position: [viewport.width/3, -25.25, 0] },
      { char: "T", position: [viewport.width/2.35, -25.25, 0] },
    ];

    return (
      <mesh>
        {letters.map((letter, index) => (
          <Text
            key={index}
            font="/font3.ttf"
            fontSize={viewport.width/7.5}
            color={gradientColor.getStyle()}
            position={[
              letter.position[0],
              hoveredIndex === index ? letter.position[1] + 0.1 : letter.position[1],
              letter.position[2],
            ]}
            anchorX="center"
            anchorY="middle"
            onPointerOver={() => setHoveredIndex(index)}
            onPointerOut={() => setHoveredIndex(null)}
          >
            {letter.char}
          </Text>
        ))}
      </mesh>
    );
  }

  function Ground() {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -25.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5} mirror={0}        />
      </mesh>
    );
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Letters />
      <Ground />
    </>
  );
};

export default Footer;