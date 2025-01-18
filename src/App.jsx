/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Environment, ContactShadows, Float } from '@react-three/drei';
import plateModel from '/plate.glb';
import { useRef, useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import { GradientTexture, MeshDistortMaterial } from '@react-three/drei';
import { AnimatedText } from './components/AnimatedText';
import gsap from 'gsap';
import Plate from './components/Plate';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const hoverSound = new Audio('/hover.mp3');
  const clickSound = new Audio('/click.mp3');
  hoverSound.volume = 0.6;

  function handleHoverSound(){
    hoverSound.play();
  }
  function handleClickSound(){
    clickSound.play();
  } 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={20}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <mesh
            scale={[20, 5, 2]}
            position={[-1, 1, -2]}
            receiveShadow
            rotation={[0, 0, 0]}
          >
            <planeGeometry args={[1, 1, 32, 32]} />
            <MeshDistortMaterial speed={0}>
              <GradientTexture
                stops={[0, 0.8, 1]}
                colors={['#e63946', '#f1faee', '#a8dadc']}
                size={100}
              />
            </MeshDistortMaterial>
            
          </mesh>


          <Float speed={3} rotationIntensity={0} floatIntensity={3}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 6, tension: 2000 }}
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

          <Environment preset="city" />
        </Canvas>
      </div>
    </>
  );
}

