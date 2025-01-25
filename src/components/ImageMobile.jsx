/* eslint-disable react/no-unknown-property */
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
const ImageMobile = ({image}) => {
    const colorMap = useLoader(TextureLoader, image);
  return (
    <mesh position={[-0.25,8,1]}  >
      <planeGeometry args={[4,4, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        transparent={true} 
      />    
    </mesh>
  )
}

export default ImageMobile