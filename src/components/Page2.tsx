import {useThree} from "@react-three/fiber"
import {Text} from "@react-three/drei" 
const Page2 = () => {
    const {viewport} = useThree();
    return (
      <>
        <Text
          font="/font2.ttf"
          fontSize={viewport.width/40}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[-viewport.width/3.5, -5, -1]}
        >
          Your personalized diet assistant
        </Text>
        <Text
          font="/font2.ttf"
          fontSize={viewport.width/40}
          color="rgba(255, 255, 255, 0.14)"
          anchorX="center"
          anchorY="middle"
          position={[-viewport.width/2.75, -5.45, -1]}
        >
          Start Your Journey
        </Text>
        <Text
          font="/font2.ttf"
          fontSize={viewport.width/30}
          color="rgb(21, 255, 0)"
          anchorX="center"
          anchorY="middle"
          position={[-viewport.width/6, -5.45, -1]}
        >
          Today!!
        </Text>
      </>
    );
  };
  
  export default Page2;