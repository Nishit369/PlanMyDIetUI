import React from 'react';
import Lottie from "lottie-react";
import anim1 from "../assets/animations/anim1.json";
import anim2 from "../assets/animations/anim2.json";
import anim3 from "../assets/animations/anim3.json";
import anim4 from "../assets/animations/anim4.json";
import anim5 from "../assets/animations/anim5.json";
import anim6 from "../assets/animations/anim6.json";

import { useThree } from '@react-three/fiber';
import { Html } from "@react-three/drei";

const Animations: React.FC = () => {
    const { gl,viewport } = useThree();

    return (
        <>
            <Html 
                transform 
                portal={{ current: gl.domElement.parentNode }} 
                position={[-viewport.width/3, -11.25, -1.4]} 
                style={{ pointerEvents: 'none' }}
            >
                <div className='anim1' style={{ pointerEvents: 'none' }}>
                    <Lottie animationData={anim1} style={{ width: "5vw", height: "5vh", pointerEvents: "none" }} />
                </div>
            </Html>

            <Html 
                transform 
                portal={{ current: gl.domElement.parentNode }} 
                position={[-viewport.width/3.5, -20.2, -1.4]} 
                style={{ pointerEvents: 'none' }}
            >
                <div className='anim2' style={{ pointerEvents: 'none' }}>
                    <Lottie animationData={anim2} style={{ width: "6vw", height: "6vh" }} />
                </div>
            </Html>

            <Html 
                transform 
                portal={{ current: gl.domElement.parentNode }} 
                position={[viewport.width/3.5, -22.5, -1.4]} 
                style={{ pointerEvents: 'none' }}
            >
                <div className='anim3' style={{ pointerEvents: 'none' }}>
                    <Lottie animationData={anim3} style={{ width: "6.5vw", height: "6.5vh" }} />
                </div>
            </Html>

            <Html 
                transform 
                portal={{ current: gl.domElement.parentNode }} 
                position={[viewport.width/3.5, -13.4, -1.4]} 
                style={{ pointerEvents: 'none' }}
            >
                <div className='anim4' style={{ pointerEvents: 'none' }}>
                    <Lottie animationData={anim4} style={{ width: "5vw", height: "5vh" }} />
                </div>
            </Html>

            <Html 
                transform 
                portal={{ current: gl.domElement.parentNode }} 
                position={[-viewport.width/3.5, -15.55, -1.4]} 
                style={{ pointerEvents: 'none' }}
            >
                <div className='anim5' style={{ pointerEvents: 'none' }}>
                    <Lottie animationData={anim5} style={{ width: "5vw", height: "5vh" }} />
                </div>
            </Html>

            <Html 
                transform 
                portal={{ current: gl.domElement.parentNode }} 
                position={[viewport.width/3.5, -17.55, -1.4]} 
                style={{ pointerEvents: 'none' }}
            >
                <div className='anim6' style={{ pointerEvents: 'none' }}>
                    <Lottie animationData={anim6} style={{ width: "7vw", height: "7vh" }} />
                </div>
            </Html>
        </>
    );
};

export default Animations;