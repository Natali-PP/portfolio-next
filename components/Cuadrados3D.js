import * as THREE from 'three'
import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { useSprings, a } from 'react-spring/three'
const number =35; 
const colors = ['#f7ed4c', '#f96766', '#509bd5', '#4c4c4d', '#fefffa']
const random = i => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length- 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
  }
}

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10]
  }
})

function Content() {
  const [springs, set] = useSprings(number, i => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 }
  }))
  
    useEffect( () =>
      void setInterval(
        () => set(i => ({ ...random(i), delay: i * 40 })),
        3000)
    ,[]);  
  
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
    </a.mesh>
  ))
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

export default function Cuadrados3D() {
  const isBrowser = typeof window !== "undefined";
  return (
    <>
      { isBrowser && (
        <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 100 }}>
          <Lights />
          <Content />
        </Canvas>
      )}
    </>  
  )
}
