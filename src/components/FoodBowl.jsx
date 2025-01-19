import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const FoodBowl = ({ position, image, calories, onHover }) => {
  const colorMap = useLoader(TextureLoader, image);

  return (
    <mesh position={position} onPointerOver={() => onHover(calories)}>
      <planeGeometry args={[0.7,0.7, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        transparent={true} 
      />
    </mesh>
  );
};

export default FoodBowl;