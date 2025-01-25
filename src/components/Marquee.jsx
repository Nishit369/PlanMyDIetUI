import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Marquee = ({ text, fontSize = 0.5, color = 'white', speed = 0.03 }) => {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.position.x -= speed;

      const textWidth = textRef.current.geometry.boundingBox.max.x * 1.1;

      if (textRef.current.position.x < -textWidth) {
        textRef.current.position.x = 5;
      }
    }
  });

  return (
    <group position={[0, -1.8, 0]}>
      <Text
        ref={textRef}
        font="/font3.ttf"
        fontSize={0.25}
        color={"#ababab"}
        maxWidth={100}
        lineHeight={1.5}
        anchorX="left"
        anchorY="middle"
        position={[5, 0, 0]} // Initial position
      >
        {text}
      </Text>
    </group>
  );
};

export default Marquee;