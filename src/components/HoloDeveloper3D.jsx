import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Html, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Code2, Rocket, MessageSquare, User, Terminal, FileCode, Layers } from 'lucide-react'

// Particle Matrix Sphere in Background
function ParticleSphere() {
  const pointsRef = useRef()

  // Generate sphere point cloud
  const count = 1800
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const colorCyan = new THREE.Color('#00f2fe')
  const colorPurple = new THREE.Color('#9d50bb')

  for (let i = 0; i < count; i++) {
    const u = Math.random()
    const v = Math.random()
    const theta = u * 2.0 * Math.PI
    const phi = Math.acos(2.0 * v - 1.0)
    const r = 2.8

    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    const mixedColor = colorCyan.clone().lerp(colorPurple, Math.random())
    colors[i * 3] = mixedColor.r
    colors[i * 3 + 1] = mixedColor.g
    colors[i * 3 + 2] = mixedColor.b
  }

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12
      pointsRef.current.rotation.x += delta * 0.04
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  )
}

// Center Hologram Developer Character & Floating Panels
export default function HoloDeveloper3D() {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.15,
        0.05
      )
    }
  })

  return (
    <group ref={groupRef} position={[4.5, 0, -1]} scale={1.15}>
      {/* 3D Dot Matrix Sphere */}
      <ParticleSphere />

      {/* Center Holographic Developer Figure */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Html transform distanceFactor={5} position={[0, 0, 0]} zIndexRange={[100, 0]}>
          <div className="holo-dev-center">
            {/* Holographic Silhouette with Laptop */}
            <svg
              width="260"
              height="280"
              viewBox="0 0 200 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="holo-svg"
            >
              <defs>
                <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9d50bb" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#4facfe" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.9" />
                </linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Head & Hair */}
              <path
                d="M 92 38 C 90 28, 110 25, 115 35 C 122 32, 126 42, 118 48 C 115 54, 95 56, 92 38 Z"
                fill="url(#holoGrad)"
                filter="url(#neonGlow)"
              />

              {/* Upper Body & Arms holding Laptop */}
              <path
                d="M 85 58 Q 100 52 120 58 L 132 90 Q 120 100 95 102 L 75 90 Z"
                fill="url(#holoGrad)"
                opacity="0.85"
                filter="url(#neonGlow)"
              />

              {/* Laptop Body & Screen */}
              <polygon
                points="60,95 110,85 135,115 80,125"
                fill="url(#holoGrad)"
                stroke="#00f2fe"
                strokeWidth="1.5"
                filter="url(#neonGlow)"
              />
              <polygon
                points="75,70 115,62 110,86 70,94"
                fill="#040711"
                stroke="#00f2fe"
                strokeWidth="2"
              />
              <circle cx="92" cy="78" r="3" fill="#00f2fe" />

              {/* Lower Body & Seated Legs */}
              <path
                d="M 80 120 Q 95 125 120 118 L 130 155 Q 115 195 95 195 L 75 155 Z"
                fill="url(#holoGrad)"
                opacity="0.8"
                filter="url(#neonGlow)"
              />
              <path
                d="M 95 195 L 85 210 Q 75 215 65 205 L 75 190 Z"
                fill="url(#holoGrad)"
                filter="url(#neonGlow)"
              />
              <path
                d="M 115 190 L 105 210 Q 95 215 85 205 L 95 185 Z"
                fill="url(#holoGrad)"
                filter="url(#neonGlow)"
              />
            </svg>
          </div>
        </Html>
      </Float>

      {/* Floating Holographic Panels - Left Top Code Window */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.8}>
        <Html transform distanceFactor={5} position={[-2.2, 1.4, 0.5]}>
          <div className="holo-panel code-window">
            <div className="window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <div className="line"><span className="ln">1</span> <span className="keyword">const</span> dev = <span className="string">'Chelladurai'</span>;</div>
              <div className="line"><span className="ln">2</span> <span className="keyword">function</span> <span className="fn">build</span>() &#123;</div>
              <div className="line"><span className="ln">3</span> &nbsp;&nbsp;<span className="keyword">return</span> <span className="string">'React + 3D'</span>;</div>
              <div className="line"><span className="ln">4</span> &#125;</div>
            </div>
          </div>
        </Html>
      </Float>

      {/* Floating Holographic Panels - Left Middle Profile Card */}
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
        <Html transform distanceFactor={5} position={[-2.4, -0.2, 0.8]}>
          <div className="holo-panel profile-card">
            <div className="avatar-circle">
              <User size={18} color="#00f2fe" />
            </div>
            <div className="profile-lines">
              <span className="bar long"></span>
              <span className="bar short"></span>
            </div>
          </div>
        </Html>
      </Float>

      {/* Floating Badge - Left Bottom Code Tag */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.7}>
        <Html transform distanceFactor={5} position={[-1.8, -1.5, 0.4]}>
          <div className="holo-badge">
            <Code2 size={20} color="#00f2fe" />
          </div>
        </Html>
      </Float>

      {/* Floating Badge - Right Top Rocket */}
      <Float speed={3.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <Html transform distanceFactor={5} position={[2.1, 1.6, 0.6]}>
          <div className="holo-badge rocket-badge">
            <Rocket size={22} color="#00f2fe" />
          </div>
        </Html>
      </Float>

      {/* Floating Badge - Right Top Chat Bubble */}
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Html transform distanceFactor={5} position={[1.4, 1.8, 0.3]}>
          <div className="holo-badge chat-badge">
            <MessageSquare size={16} color="#9d50bb" />
          </div>
        </Html>
      </Float>

      {/* Floating Panel - Right Middle UI Card */}
      <Float speed={2.8} rotationIntensity={0.3} floatIntensity={0.7}>
        <Html transform distanceFactor={5} position={[2.3, 0.1, 0.5]}>
          <div className="holo-panel ui-card">
            <div className="ui-header">
              <span className="ui-pill"></span>
            </div>
            <div className="ui-body">
              <span className="line font-bold"></span>
              <span className="line width-70"></span>
              <span className="line width-50"></span>
            </div>
          </div>
        </Html>
      </Float>

      {/* Floating Panel - Right Bottom Code Snippet */}
      <Float speed={2.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <Html transform distanceFactor={5} position={[2.0, -1.4, 0.7]}>
          <div className="holo-panel code-window mini">
            <div className="code-content">
              <div className="line"><span className="keyword">import</span> React;</div>
              <div className="line"><span className="keyword">const</span> app = True;</div>
            </div>
          </div>
        </Html>
      </Float>

      {/* Floating Badge - Right Middle Code Tag */}
      <Float speed={3} rotationIntensity={0.4} floatIntensity={0.8}>
        <Html transform distanceFactor={5} position={[1.5, 0.9, 0.8]}>
          <div className="holo-badge">
            <Code2 size={18} color="#9d50bb" />
          </div>
        </Html>
      </Float>
    </group>
  )
}
