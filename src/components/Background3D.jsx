import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, OrbitControls, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating Ambient Particles in 3D Space
function Ambient3DParticles() {
  const pointsRef = useRef()
  const count = 1200
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const colorCyan = new THREE.Color('#00f2fe')
  const colorPurple = new THREE.Color('#9d50bb')

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20

    const mixedColor = colorCyan.clone().lerp(colorPurple, Math.random())
    colors[i * 3] = mixedColor.r
    colors[i * 3 + 1] = mixedColor.g
    colors[i * 3 + 2] = mixedColor.b
  }

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03
      pointsRef.current.rotation.x += delta * 0.015
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// Interactive Mouse Parallax Camera Controller
function Rig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.5,
      0.05
    )
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.5,
      0.05
    )
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Background3D({ enableControls }) {
  return (
    <div id="canvas-container" style={{ pointerEvents: enableControls ? 'auto' : 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient & Accent Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f2fe" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#9d50bb" />

        {/* Dynamic 3D Starfield */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0.5}
          fade
          speed={1.5}
        />

        {/* 3D Ambient Particles */}
        <Ambient3DParticles />

        {/* Camera Parallax / Controls */}
        {!enableControls && <Rig />}
        {enableControls && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />}
      </Canvas>
    </div>
  )
}
