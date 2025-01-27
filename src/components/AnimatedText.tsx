import React, { useRef, useEffect } from 'react';
import { Text } from '@react-three/drei';
import gsap from 'gsap';
import { Mesh } from 'three';
import { useThree } from 'react-three-fiber';

export const AnimatedText: React.FC = () => {
  
  const textRef2 = useRef<Mesh | null>(null);
  const textRef3 = useRef<Mesh | null>(null);
  const textRef4 = useRef<Mesh | null>(null);
  const textRefs = useRef<(Mesh | null)[]>([]);
  const { viewport } = useThree();

  useEffect(() => {
  
    textRefs.current.forEach((text, i) => {
      if (text) {
        gsap.to(text.position, {
          y: 1.1,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.inOut",
        });
      }
    });

  
    if (textRef2.current) {
      gsap.to(textRef2.current.position, {
        x: viewport.width/6,
        y: 0.5,
        duration: 1.5,
        delay: 2,
      });
    }

    if (textRef3.current) {
      gsap.to(textRef3.current.position, {
        x: viewport.width/7.2,
        y: 0.1,
        duration: 1.5,
        delay: 3,
      });
    }

    if (textRef4.current) {
      gsap.to(textRef4.current.position, {
        x: viewport.width/7.5,
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
        fontSize={viewport.width/15}
        color={"#E11D48"}
        anchorX="center"
        anchorY="middle"
        position={[viewport.width/70, 0, 1]}
      >
        {"P"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[1] = el)}
        font="/font3.ttf"
        fontSize={viewport.width/15}
        color={"white"}
        anchorX="center"
        anchorY="middle"
        position={[viewport.width/10.5, 0, 1]}
      >
        {"lan"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[2] = el)}
        font="/font3.ttf"
        fontSize={viewport.width/15}
        color={"#E11D48"}
        anchorX="center"
        anchorY="middle"
        position={[viewport.width/5.5, 0, 1]}
      >
        {"M"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[3] = el)}
        font="/font3.ttf"
        fontSize={viewport.width/15}
        color={"white"}
        anchorX="center"
        anchorY="middle"
        position={[viewport.width/4.25, 0, 1]}
      >
        {"y"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[4] = el)}
        font="/font3.ttf"
        fontSize={viewport.width/15}
        color={"#E11D48"}
        anchorX="center"
        anchorY="middle"
        position={[viewport.width/3.5, 0, 1]}
      >
        {"D"}
      </Text>
      <Text
        ref={(el) => (textRefs.current[5] = el)}
        font="/font3.ttf"
        fontSize={viewport.width/15}
        color={"white"}
        anchorX="center"
        anchorY="middle"
        position={[viewport.width/2.8, 0, 1]}
      >
        {"iet"}
      </Text>

      <Text
        ref={textRef2}
        font="/font4.ttf"
        fontSize={viewport.width/40}
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
        fontSize={viewport.width/40}
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
        fontSize={viewport.width/40}
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