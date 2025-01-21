import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useState } from 'react';
import { Text } from '@react-three/drei';

const FoodBowl = ({ position, image, calories,name, onHover }) => {
  const colorMap = useLoader(TextureLoader, image);
  const [hovered, setHovered] = useState(false);
  const [currentY, setCurrentY] = useState(position[1]);

  useFrame(()=>{
    const targetY = hovered ? position[1]+0.2 : position[1];
    setCurrentY((prevY) => prevY + (targetY - prevY) * 0.1);
  })

  return (
    <mesh position={[position[0],currentY,position[2]]} onPointerOver={() => {onHover(calories,name,image); setHovered(true);}} onPointerOut={()=> setHovered(false)}>
      <planeGeometry args={[0.6,0.6, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        transparent={true} 
      />
      
      <Text
          font="/font2.ttf"
          position={[0, -0.4, 0]} 
          fontSize={0.1}
          color="#FFFAFA"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>

      
    </mesh>
  );
};

export default FoodBowl;