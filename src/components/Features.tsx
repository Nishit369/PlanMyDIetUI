import { Text } from '@react-three/drei';
import { useThree } from 'react-three-fiber';

const Features = () => {
    const {viewport} = useThree();
  return (
    <>
    <Text
    font="/font4.ttf"
    fontSize={viewport.width/40}
    fontWeight={700}
    color="#E11D48"
    anchorX="center"
    anchorY="middle"
    position={[viewport.width/4,-11, -1]}
    >
        Personalized Diet Plans

    </Text>
 

    <Text
    font="/font2.ttf"
    fontSize={viewport.width/50}
    fontWeight={700}
    color="white"
    anchorX="center"
    anchorY="middle"
    position={[viewport.width/3.5,-11.5, -1]}
    >
    {"Receive diet plans customized to \nyour unique health goals,"}
    {"\npreferences, and dietary restrictions."}

    </Text>
    <Text
    font="/font4.ttf"
    fontSize={viewport.width/40}
    fontWeight={700}
    color="#E11D48"
    anchorX="center"
    anchorY="middle"
    position={[-viewport.width/3,-13, -1]}
    >
        Share Meal Plans

    </Text>
    <Text
    font="/font2.ttf"
    fontSize={viewport.width/50}
    fontWeight={700}
    color="white"
    anchorX="center"
    anchorY="middle"
    position={[-viewport.width/3.8,-13.65, -1]}
    >
    {"The sharing meal plans feature\nallows users to easily share their\npersonalized or curated meal plans\nwith friends,family,or community groups. "}
    </Text>
    <Text
    font="/font4.ttf"
    fontSize={viewport.width/40}
    fontWeight={700}
    color="#E11D48"
    anchorX="center"
    anchorY="middle"
    position={[viewport.width/4,-15, -1]}
    >
        Curated Shopping List

    </Text>
    <Text
    font="/font2.ttf"
    fontSize={viewport.width/50}
    fontWeight={700}
    color="white"
    anchorX="center"
    anchorY="middle"
    position={[viewport.width/3.5,-15.75, -1]}
    >
{"Automatically generates a list of\ningredients based on the meal plan,\nhelping users organize their grocery\nshopping by listing all required\nitems for the week."}
    </Text>
    <Text
    font="/font4.ttf"
    fontSize={viewport.width/40}
    fontWeight={700}
    color="#E11D48"
    anchorX="center"
    anchorY="middle"
    position={[-viewport.width/3,-17.05, -1]}
    >
        Friendly Challenges

    </Text>
    <Text
    font="/font2.ttf"
    fontSize={viewport.width/50}
    fontWeight={700}
    color="white"
    anchorX="center"
    anchorY="middle"
    position={[-viewport.width/3.5,-17.75, -1]}
    >
{"Compete with yourself or your\nfriends to stay motivated and\nachieve your wellness goals together."}
    </Text>
    <Text
    font="/font4.ttf"
    fontSize={viewport.width/40}
    fontWeight={700}
    color="#E11D48"
    anchorX="center"
    anchorY="middle"
    position={[viewport.width/4,-19.55, -1]}
    >
        Myriad of Recipes

    </Text>
    <Text
    font="/font2.ttf"
    fontSize={viewport.width/50}
    fontWeight={700}
    color="white"
    anchorX="center"
    anchorY="middle"
    position={[viewport.width/3.5,-20.45, -1]}
    >
{"Explore over 1500 delicious and\nhealthy recipes with PlanMyDiet!\nFrom quick snacks to gourmet meals,\nfind options that suit your taste\nand lifestyle."}
    </Text>

    <Text
    font="/font4.ttf"
    fontSize={viewport.width/40}
    fontWeight={700}
    color="#E11D48"
    anchorX="center"
    anchorY="middle"
    position={[-viewport.width/3.5,-21.95, -1]}
    >
        Holistic Wellness Routines

    </Text>
    <Text
    font="/font2.ttf"
    fontSize={viewport.width/50}
    fontWeight={700}
    color="white"
    anchorX="center"
    anchorY="middle"
    position={[-viewport.width/3.8,-22.8, -1]}
    >
{"Get personalized kitchen tips,\neffective exercise routines,\nand daily healthy living strategies.\nGo beyond just diet to achieve a \nbalanced, holistic approach to wellness."}
    </Text>
    </>
  )
}

export default Features