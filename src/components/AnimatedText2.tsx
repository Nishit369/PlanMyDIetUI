import { Text } from '@react-three/drei'
import {useThree} from "@react-three/fiber";
export const AnimatedText2 = () => {
    const {viewport}= useThree();
    return (
        <Text
            font="/font4.ttf"
            fontSize={viewport.width/40}
            fontWeight={700}
            color="white"
            anchorX="center"
            anchorY="middle"
            position={[-viewport.width/3, -10, -1]}
        >
            What do I get ?
        </Text>
    );
};