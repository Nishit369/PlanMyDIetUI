/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { useGLTF, Html, Text } from "@react-three/drei";
import FoodBowl from "./FoodBowl";
import ImageMobile from "./ImageMobile";
import {useThree} from "@react-three/fiber";

interface LaptopAndMobileProps {
  laptopModelPath: string;
  mobileModelPath: string;
}

const LaptopAndMobile = ({ laptopModelPath, mobileModelPath }: LaptopAndMobileProps) => {
  const laptopModel = useGLTF(laptopModelPath);
  const mobileModel = useGLTF(mobileModelPath);
  const [calories, setCalories] = useState<string>('0 Cal');
  const [name, setName] = useState<string>('food');
  const [image, setImage] = useState<string>('/food0.png');
  const {viewport} = useThree();
  const yFactor = viewport.height * 0.5;

  const handleHover = (calories: string, name: string, image: string) => {
    setCalories(calories);
    setName(name);
    setImage(image);
  };

  return (
    <>
      <group position={[viewport.width/5.6, -(yFactor*2.8), 0]} rotation={[0, 0, 0]} scale={viewport.width/7}>
        <primitive object={laptopModel.scene} scale={0.1} />
        <Text
          font="/font2.ttf"
          fontSize={0.09}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[-0.925, 1.5, -1.000001]}
        >
          {"Name - Pratyay \n"}
          {"\n"}
          {"Age - 20\n"}
          {"Weight - 69 kgs\n"}
          {"Height - 5'9''\n"}
          {"BMI - 22.5\n"}
          {"\n"}
        </Text>
        <Text
          font="/font2.ttf"
          fontSize={0.09}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[-0.07, 1.1, -0.9]}
        >
          ---Meals consumed today---
        </Text>
        <Text
          font="/font2.ttf"
          fontSize={0.09}
          color="green"
          anchorX="center"
          anchorY="middle"
          position={[0, 1.9, -0.9]}
          letterSpacing={0.6}
          lineHeight={0.9}
        >
          PlanMyDiet
        </Text>
        <Text
          font="/font2.ttf"
          fontSize={0.09}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[1, 1.8, -0.9]}
        >
          Allergens - 10
        </Text>
        <Text
          font="/font2.ttf"
          fontSize={0.09}
          color="red"
          anchorX="center"
          anchorY="middle"
          position={[1, 1.4, -0.9]}
        >
          {"Goal - 60kgs\n"}
        </Text>

        <mesh position={[0, 1, -1.059]} castShadow>
          <planeGeometry args={[3, 2, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <FoodBowl
          position={[-1, 0.75, -1]}
          image="/food1.png"
          calories="1500 Cal"
          name="Pancake"
          onHover={handleHover}
        />
        <FoodBowl
          position={[0, 0.75, -1]}
          image="/food2.png"
          calories="550 Cal"
          name="Fresh Salad"
          onHover={handleHover}
        />
        <FoodBowl
          position={[1, 0.75, -1]}
          image="/food3.png"
          name="Thali"
          calories="2000 Cal"
          onHover={handleHover}
        />
      </group>
      <group position={[viewport.width/2.37, -(yFactor*2.8*0.98), 0]} scale={viewport.width/50}>
        <primitive object={mobileModel.scene} />
        <mesh>
          {image !== '/food0.png' && <ImageMobile image={image} />}
          <Text
            font="/font2.ttf"
            fontSize={0.5}
            color="white"
            anchorY="middle"
            position={[-0.1, 4, 0.4]}
            anchorX="center"
          >
            {"Food :"}
            {name}
            {"\n"}
            {"\n"}
            {"Calories :"}
            {calories}
          </Text>
        </mesh>
      </group>
    </>
  );
};

export default LaptopAndMobile;