import React from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const LoginAndSignup: React.FC = () => {
  const { gl } = useThree();
  const {viewport} = useThree();


  return (
    <Html transform portal={{ current: gl.domElement.parentNode }} position={[-viewport.width/3.25,-6,-1]} scale={viewport.width/8}>
      <div className='login-buttons'>
        <a href='/dashboard' className='signup-button' style={{backgroundColor:"#2c7be5", color:"white", border:"none", padding: "4px 8px", fontSize:"0.35rem", fontFamily: "Arial", cursor: "pointer", borderRadius: "5px", transition: "background-color 0.3s, transform: 0.3s ", whiteSpace:"nowrap",display: "inline-block",
  textDecoration:"none" ,textAlign:"center"}}>
          Create an account
        </a>
        <a href='/dashboard' className='login-button'  style={{backgroundColor:"#2c7be5", color:"white", border:"none", padding: "4px 8px", fontSize:"0.35rem", fontFamily: "Arial", cursor: "pointer", borderRadius: "5px", transition: "background-color 0.3s, transform: 0.3s ", whiteSpace:"nowrap",display: "inline-block",
  textDecoration:"none", textAlign:"center"}}>
          Login
        </a>
      </div>
    </Html>
  );
};

export default LoginAndSignup;