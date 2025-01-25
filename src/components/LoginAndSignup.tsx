import React from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const LoginAndSignup: React.FC = () => {
  const { gl } = useThree();

  return (
    <Html transform portal={{ current: gl.domElement.parentNode }} position={[-2.25,-6,-1]} scale={1}>
      <div className='login-buttons'>
        <a href='/dashboard' className='signup-button'>
          Create an account
        </a>
        <a href='/dashboard' className='login-button'>
          Login
        </a>
      </div>
    </Html>
  );
};

export default LoginAndSignup;