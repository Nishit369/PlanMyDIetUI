import React from "react";
import { useGLTF, Html, Text} from "@react-three/drei";

const LaptopAndMobile = ({ laptopModelPath, mobileModelPath, calories }) => {
  const laptopModel = useGLTF(laptopModelPath);
  const mobileModel = useGLTF(mobileModelPath);

  return (
    <>
      <group position={[1.5, -4, 0]} >
        
        <primitive object={laptopModel.scene} scale={0.1}/>
        <mesh position={[0, 1, -1.06]}>
          <planeGeometry args={[3, 1.85, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        
      </group>
      <group position={[3.4, -3.7, -1]} scale={0.13}>
        <primitive object={mobileModel.scene} />
        <mesh >
          <Text
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
            position={[0, 3, 0.4]}
          >
            
            {calories}
            {"\ncalories"}
          </Text>
        </mesh>
      </group>
    </>
  );
};

export default LaptopAndMobile;