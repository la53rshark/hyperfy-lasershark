import React from 'react'

export default function World() {
  return (
    <environment>
      <hdr src="sky.hdr" />
      <skysphere src="sky.png" encoding="srgb" />
      <climbing />
      <gliding />
      <flying />
      <rigidbody>
        <model scale={[2.5,2.5,2.5]}position={[0,-0.12,0]} src="lab_base_13.glb" />
        <model scale={[2.5,2.5,2.5]}position={[0,-0.57,0]} src="floor.glb" />
      </rigidbody>
      <audio autoplay={true} volume={0.3} src="resistor.mp3" />
      <spawn position={[0,2,0]} />
    </environment>
  )
}
