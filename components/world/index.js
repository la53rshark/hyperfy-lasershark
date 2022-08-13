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
          allColliders="trimesh"
          scale={[1,1,1]}
          position={[0, -0.12, 0]}
          src="lab_base_14.glb"
        />
      </rigidbody>
      <Erika position={[-4.332, 1.037, 3.226]} solvePosition={[1.3, 1, 3]} />
      <spawn position={[0, 2, 0]} />
    </environment>
  )
}
