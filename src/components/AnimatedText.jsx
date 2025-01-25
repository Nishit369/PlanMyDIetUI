import React, { useRef, useEffect } from 'react';
import { Text } from '@react-three/drei';
import gsap from 'gsap';

export const AnimatedText = () => {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text, i) => {
      gsap.to(text.position, {
        y: 1.2,
        duration: 1,
        delay: i * 0.2,
        ease: "power2.inOut",
      });
    });

    gsap.to(textRef2.current.position, {
      x: 1.25,
      y: 0.6,
      duration: 1.5,
      delay: 2,
    });
    gsap.to(textRef3.current.position, {
      x: 1.1,
      y: 0.2,
      duration: 1.5,
      delay: 3,
    });
    gsap.to(textRef4.current.position, {
      x: 1.05,
      y: -0.2,
      duration: 1.5,
      delay: 4,
    });
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
        font="/font2.ttf"
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[500, 0.5, 1]}
      >
        {'Set goals, track meals,'}
      </Text>
      <Text
        ref={textRef3}
        font="/font2.ttf"
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[500, 0.25, 1]}
      >
        {'and let AI guide you'}
      </Text>
      <Text
        ref={textRef4}
        font="/font2.ttf"
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[500, 0, 1]}
      >
        {'to a healthier you.'}
      </Text>
    </>
  );
};