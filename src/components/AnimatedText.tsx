import React, { useRef, useEffect } from 'react';
import { Text } from '@react-three/drei';
import gsap from 'gsap';
import { Mesh } from 'three';

export const AnimatedText: React.FC = () => {
  
  const textRef2 = useRef<Mesh | null>(null);
  const textRef3 = useRef<Mesh | null>(null);
  const textRef4 = useRef<Mesh | null>(null);
  const textRefs = useRef<(Mesh | null)[]>([]);

  useEffect(() => {
  
    textRefs.current.forEach((text, i) => {
      if (text) {
        gsap.to(text.position, {
          y: 1.1,
          x: text.position.x -=0.25,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.inOut",
        });
      }
    });

  
    if (textRef2.current) {
      gsap.to(textRef2.current.position, {
        x: 1.2,
        y: 0.5,
        duration: 1.5,
        delay: 2,
      });
    }

    if (textRef3.current) {
      gsap.to(textRef3.current.position, {
        x: 0.97,
        y: 0.1,
        duration: 1.5,
        delay: 3,
      });
    }

    if (textRef4.current) {
      gsap.to(textRef4.current.position, {
        x: 0.9,
        y: -0.3,
        duration: 1.5,
        delay: 4,
      });
    }
  }, []);

  return (
    <>
      <Text
        ref={(el) => (textRefs.current[0] = el)}
        font="/font3.ttf"
        fontSize={0.5}
        color={"#E11D48"}
        anchorX="center"
        anchorY="middle"
        position={[0.1, 0, 1]}
      >
        {"P"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[1] = el)}
        font="/font3.ttf"
        fontSize={0.5}
        color={"white"}
        anchorX="center"
        anchorY="middle"
        position={[0.7, 0, 1]}
      >
        {"lan"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[2] = el)}
        font="/font3.ttf"
        fontSize={0.5}
        color={"#E11D48"}
        anchorX="center"
        anchorY="middle"
        position={[1.4, 0, 1]}
      >
        {"M"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[3] = el)}
        font="/font3.ttf"
        fontSize={0.5}
        color={"white"}
        anchorX="center"
        anchorY="middle"
        position={[1.8, 0, 1]}
      >
        {"y"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[4] = el)}
        font="/font3.ttf"
        fontSize={0.5}
        color={"#E11D48"}
        anchorX="center"
        anchorY="middle"
        position={[2.2, 0, 1]}
      >
        {"D"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[5] = el)}
        font="/font3.ttf"
        fontSize={0.5}
        color={"white"}
        anchorX="center"
        anchorY="middle"
        position={[2.75, 0, 1]}
      >
        {"iet"}
      </Text>

      <Text
        ref={textRef2}
        font="/font4.ttf"
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[500, 0.5, 1]}
        letterSpacing={0.15}
      >
        {'Set goals, track meals,'}
      </Text>
      <Text
        ref={textRef3}
        font="/font4.ttf"
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.15}
        position={[500, 0.25, 1]}
      >
        {'and let AI guide you'}
      </Text>
      <Text
        ref={textRef4}
        font="/font4.ttf"
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.15}
        position={[500, 0, 1]}
      >
        {'to a healthier you.'}
      </Text>
    </>
  );
};