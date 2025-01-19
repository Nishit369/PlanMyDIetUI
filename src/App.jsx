/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  PresentationControls,
  Environment,
  ScrollControls,
  Scroll,
  useScroll,
  Float,
  OrbitControls,
} from '@react-three/drei';
import plateModel from '/plate.glb';
import { useRef, useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import { GradientTexture, MeshDistortMaterial, Html } from '@react-three/drei';
import { AnimatedText } from './components/AnimatedText';
import gsap from 'gsap';
import Plate from './components/Plate';
import FoodBowl from './components/FoodBowl';
import LaptopAndMobile from './components/LaptopAndMobile';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [calories, setCalories] = useState('0 Cal');

  const hoverSound = new Audio('/hover.mp3');
  const clickSound = new Audio('/click.mp3');
  hoverSound.volume = 0.6;

  function handleHoverSound() {
    hoverSound.play();
  }
  function handleClickSound() {
    clickSound.play();
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHover = (calories) => {
    setCalories(calories);
  };

  return (
    <>
      <span
        className="material-icons menu-btn"
        onClick={() => {
          setIsOpen(true);
          handleMenuToggle();
          handleClickSound();
        }}
        onMouseOver={handleHoverSound}
        style={{ visibility: menuOpen ? 'hidden' : 'visible' }}
      >
        menu
      </span>
      <Menu
        isOpen={isOpen}
        onChange={setIsOpen}
        menuOpen={menuOpen}
        menuChange={setMenuOpen}
      />
      <div className="canvas-container">
        <Canvas
          style={{ height: '100vh', width: '100vw', touchAction: 'none' }}
          shadows
          camera={{ position: [0, 0, 10], fov: 25 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ScrollControls pages={3}>
            <Scroll>
              <>
                <mesh
                  scale={[20, 5, 2]}
                  position={[-1, 1, -2]}
                  receiveShadow
                  rotation={[0, 0, 0]}
                >
                  {/* <planeGeometry args={[1, 1, 32, 32]} />
                  <MeshDistortMaterial speed={0}>
                    <GradientTexture
                      stops={[0, 0.8, 1]}
                      colors={[]}
                      size={100}
                    />
                  </MeshDistortMaterial> */}
                </mesh>
                <Float speed={3} rotationIntensity={0} floatIntensity={3}>
                  <PresentationControls
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 2, tension: 100 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 10, Math.PI / 10]}
                    azimuth={[-Math.PI / 8, Math.PI / 8]}
                  >
                    <Plate
                      rotation={[Math.PI / 4, 0, 0]}
                      position={[-10, 0.65, 0]}
                      scale={7.5}
                      castShadow
                    />
                  </PresentationControls>
                </Float>

                <AnimatedText />
              </>

              <>
              <PresentationControls>
              <LaptopAndMobile
          laptopModelPath="/laptop.glb"
          mobileModelPath="/phone.glb"
          calories={calories}
        />
        </PresentationControls>
                <mesh
                  scale={[20, 5, 2]}
                  position={[-1, -3, -2]}
                  receiveShadow
                  rotation={[0, 0, 0]}
                >
                </mesh>
                
                {/* <OrbitControls/> */}
                <FoodBowl
                  position={[0.5, -3, -1]}
                  image="/food1.png"
                  calories="150 Cal"
                  onHover={handleHover}
                />
                <FoodBowl
                  position={[1.5, -3, -1]}
                  image="/food2.png"
                  calories="200 Cal"
                  onHover={handleHover
                  }
                />
                <FoodBowl
                  position={[2.5, -3, -1]}
                  image="/food3.png"
                  calories="300 Cal"
                  onHover={handleHover}
                />
                
              </>

              <>
                <mesh
                  scale={[20, 5, 2]}
                  position={[-1, -8, -2]}
                  receiveShadow
                  rotation={[0, 0, 0]}
                >
                  {/* <planeGeometry args={[1, 1, 32, 32]} />
                  <MeshDistortMaterial speed={0}>
                    <GradientTexture
                      stops={[0, 0.8, 1]}
                      colors={['#e63946', '#f1faee', '#a8dadc']}
                      size={100}
                    />
                  </MeshDistortMaterial> */}
                </mesh>
              </>
            </Scroll>
          </ScrollControls>

          <Environment preset="city" />
        </Canvas>
      </div>
    </>
  );
}
