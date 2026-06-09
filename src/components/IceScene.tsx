import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, Icosahedron } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Crystal() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    const s = 1 + Math.sin(t * 0.6) * 0.02;
    ref.current.scale.setScalar(s);
  });

  return (
    <Float floatIntensity={0.6} rotationIntensity={0.2} speed={1.2}>
      <Icosahedron ref={ref} args={[1.6, 1]}>
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1.2}
          chromaticAberration={0.4}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.4}
          temporalDistortion={0.1}
          roughness={0.08}
          ior={1.45}
          color="#dceaff"
          attenuationColor="#7fb3ff"
          attenuationDistance={1.2}
        />
      </Icosahedron>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
  }
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#a5c8ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function IceScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#070912"]} />
      <fog attach="fog" args={["#070912", 6, 14]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#cfe2ff" />
      <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#5a8fff" />
      <Suspense fallback={null}>
        <Crystal />
        <Particles />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
