import React from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { WebGLRenderer } from 'three';

const LoginAndSignup = () => {
  const { gl } = useThree();

  return (
    <Html transform portal={{ current: gl.domElement.parentNode as HTMLElement }} position={[-0.3, -3.5, -1.4]}>
      <div className='login-buttons'>
        <button className='signup-button'>Create an account</button>
        <button className='login-button'>Login</button>
      </div>
    </Html>
  );
};

export default LoginAndSignup;