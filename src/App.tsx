/* eslint-disable react/no-unknown-property */
import { Canvas} from '@react-three/fiber';
import {
  PresentationControls,
  ScrollControls,
  Scroll,
  Float,
  GradientTexture,
  Environment,
  Text,
  OrbitControls,
} from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Plate from './components/Plate';
import LaptopAndMobile from './components/LaptopAndMobile';
import LoginAndSignup from './components/LoginAndSignup';
import { AnimatedText } from './components/AnimatedText';
import { AnimatedText2 } from './components/AnimatedText2';
import Features from './components/Features';
import Animations from './components/Animations';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import { Suspense } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import Page2 from './components/Page2';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [start, setStart] = useState(false);
  const hoverSound = new Audio('/hover.mp3');
  const clickSound = new Audio('/click.mp3');

  const handleHoverSound = () => hoverSound.play();
  const handleClickSound = () => clickSound.play();
  const handleMenuToggle = () => setMenuOpen(!menuOpen);


  const handleStart = () => {
    setStart(true);
  };

  const marqueeText =
    'PlanMyDiet | Healthy Living | Personal Nutrition | Fitness Goals | Balanced Meals | Wellness Tips | Protein Rich Diet | Vegan Options | Keto Friendly | Personalized Plans | Calorie Tracking | Meal Prep Ideas | Healthy Recipes | Nutritional Guidance | Weight Loss Tips | Mindful Eating | Wellness Programs | Sustainable Diet | Hydration Goals | Lifestyle Changes | Gut Health | Mental Wellness | Exercise Tips | Diet Trends | Food Facts';

  return (
    <>
      <div className='logo-container'>
      <a href="https://www.google.com" >
        <img src="/logo.png" alt="logo" className="logo" />
      </a>
      </div>

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
          <ambientLight intensity={2} />
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

          <ScrollControls pages={6.5} damping={0.1}>
            <Scroll>
              <mesh
                scale={[20, 5, 2]}
                position={[-1, 1, -2]}
                receiveShadow
                rotation={[0, 0, 0]}
              >
                <planeGeometry args={[1, 1.5, 32, 32]} />
                <meshBasicMaterial>
                  <GradientTexture
                    stops={[0, 0.8,1]}
                    colors={['rgb(9, 9, 9)', 'rgb(54, 53, 53)', 'rgb(93, 93, 93)', 'rgb(136, 133, 133)']}
                    size={100}
                  />
                </meshBasicMaterial>
              </mesh>
              <Marquee text={marqueeText} />
              <Float speed={3} rotationIntensity={0} floatIntensity={3}>
                <Suspense fallback={null}>
                  {start && (
                    <PresentationControls
                      config={{ mass: 2, tension: 500 }}
                      snap={{ mass: 2, tension: 100 }}
                      rotation={[0, 0.3, 0]}
                      polar={[-Math.PI / 10, Math.PI / 10]}
                      azimuth={[-Math.PI / 8, Math.PI / 8]}
                    >
                      <Plate
                        rotation={[Math.PI / 4, 0, 0]}
                        position={[-10, 0.5, 0]}
                        castShadow
                      />
                    </PresentationControls>
                  )}
                </Suspense>
              </Float>

              <Suspense fallback={null}>
                {start && <AnimatedText />}
              </Suspense>

              <mesh
                scale={[20, 5, 2]}
                position={[-1, -6.5, -2.01]}
                receiveShadow
                rotation={[0, 0, 0]}
              >
                <planeGeometry args={[1, 1.5, 32, 32]} />
                <meshBasicMaterial>
                  <GradientTexture
                    stops={[0, 0.7, 0.8]}
                    colors={['#282a2b', '#35393b', '#54595c', '#7a8285']}
                    size={100}
                  />
                </meshBasicMaterial>
              </mesh>
              <Float speed={2} rotationIntensity={0} floatIntensity={2}>
                <Suspense fallback={null}>
                  {start && (
                    <LaptopAndMobile
                      laptopModelPath="/laptop.glb"
                      mobileModelPath="/phone.glb"
                    />
                  )}
                </Suspense>
              </Float>
              <Page2/>
              <LoginAndSignup />

              <mesh
                scale={[10, 3, 1]}
                position={[-1, -17.5, -1.99]}
                receiveShadow
                rotation={[0, 0, 0]}
              >
                <planeGeometry args={[2, 5.5, 10, 10]} />
                <meshBasicMaterial>
                  <GradientTexture
                    stops={[0.7, 0.8]}
                    colors={['#282a2b', '#35393b', '#54595c', '#54595c']}
                    size={100}
                  />
                </meshBasicMaterial>
              </mesh>
              <Suspense fallback={null}>
                {start && <AnimatedText2 />}
              </Suspense>
              <Animations />
              <Features />
              <Footer />
            </Scroll>
          </ScrollControls>
          {/* <OrbitControls/> */}
          {/* <Environment preset="city" /> */}
        </Canvas>
        <LoadingScreen started={start} onStarted={handleStart} />
        
      </div>
    </>
  );
}