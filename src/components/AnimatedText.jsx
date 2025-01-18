import React, { useRef, useEffect } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
export const AnimatedText = () => {
    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();
    useEffect(() =>{
        gsap.to(textRef1.current.position, { x:1.17, duration:3, delay:0.5, stagger:5 });
        gsap.to(textRef2.current.position, { x:0.85,y:0.75, duration:3, stagger:12 , delay:2});
        gsap.to(textRef3.current.position, { x:0.85,y:0.5, duration:3, stagger:12 , delay:3});
        gsap.to(textRef4.current.position, { x:0.78,y:0.25, duration:3, stagger:12, delay:4 });
    },[]);
  
    return (
        <>
        <Text
                ref={textRef1}
                font="/font1.ttf" 
                fontSize={0.5}
                color="white" 
                anchorX="center" 
                anchorY="middle" 
                position={[5,1.25,1]}
              >
                {"PlanMyDiet"}
              </Text>
              <Text
                ref={textRef2}
                font="/font2.ttf" 
                fontSize={0.2}
                color="white" 
                anchorX="center" 
                anchorY="middle" 
                position={[5,0.5,1]}
              >
                {"   Set goals, track meals,"}
              </Text>
              <Text
                ref={textRef3}
                font="/font2.ttf" 
                fontSize={0.2}
                color="white" 
                anchorX="center" 
                anchorY="middle" 
                position={[5,0.25,1]}
              >
                {"and let AI guide you"}
              </Text>
              <Text
                ref={textRef4}
                font="/font2.ttf" 
                fontSize={0.2}
                color="white" 
                anchorX="center" 
                anchorY="middle" 
                position={[5,0,1]}
              >
                {"to a healthier you."}
              </Text>
        </>
    );
  }; 

