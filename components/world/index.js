import React from 'react'
import { Erika } from './npc/Erika'

export default function World() {
  return (
    <environment>
      <hdr src="sky.hdr" />
      <skysphere src="sky.png" encoding="srgb" />
      <climbing />
      <gliding />
      <flying />
      <rigidbody>
        <model
          scale={[2.5, 2.5, 2.5]}
          position={[0, -0.12, 0]}
          src="lab_base_13.glb"
        />
        <model
          scale={[2.5, 2.5, 2.5]}
          position={[0, -0.57, 0]}
          src="floor.glb"
        />
      </rigidbody>
      <Erika position={[-4.332, 1.037, 3.226]} teddyPosition={[0, 0, 3]} />
      <audio autoplay={true} loop={false} volume={0.5} src="resistor.mp3" />
      <spawn position={[0, 2, 0]} />
    </environment>
  )
}
