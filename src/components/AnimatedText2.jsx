import { Text } from '@react-three/drei'

export const AnimatedText2 = () => {

    return (
        <Text
            font="/font2.ttf"
            fontSize={0.25}
            fontWeight={700}
            color="white"
            anchorX="center"
            anchorY="middle"
            position={[-2.2, -10, -1]}
        >
            What do I get ?
        </Text>
    );
};