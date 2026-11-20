import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
}

export default function HeroScene({ mouseX, mouseY }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, 3, 2]} intensity={1.5} color="#C9F36B" />
      <pointLight position={[3, -2, -2]} intensity={0.6} color="#88aaff" />
      <Environment preset="city" />
      <HeroObject mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}

function HeroObject({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const outerTorusRef = useRef<THREE.Mesh>(null);
  const innerTorusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Mouse-responsive gentle tilt
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseY * 0.3,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.3 + t * 0.08,
        0.05
      );
    }

    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.x = t * 0.3;
      outerTorusRef.current.rotation.z = t * 0.15;
    }

    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.y = -t * 0.4;
      innerTorusRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Outer metallic ring */}
        <Torus
          ref={outerTorusRef as React.Ref<THREE.Mesh>}
          args={[1.6, 0.06, 32, 120]}
        >
          <meshStandardMaterial
            color="#C9F36B"
            metalness={0.9}
            roughness={0.1}
            emissive="#C9F36B"
            emissiveIntensity={0.3}
          />
        </Torus>

        {/* Inner tilted ring */}
        <Torus
          ref={innerTorusRef as React.Ref<THREE.Mesh>}
          args={[1.1, 0.04, 32, 100]}
          rotation={[Math.PI / 2.8, 0.4, 0]}
        >
          <meshStandardMaterial
            color="#F5F2EA"
            metalness={1}
            roughness={0.05}
          />
        </Torus>

        {/* Small accent ring */}
        <Torus
          args={[0.7, 0.025, 24, 80]}
          rotation={[Math.PI / 1.5, 0.8, 0]}
        >
          <meshStandardMaterial
            color="#C9F36B"
            metalness={0.8}
            roughness={0.2}
            emissive="#C9F36B"
            emissiveIntensity={0.15}
          />
        </Torus>

        {/* Central glass sphere */}
        <Sphere ref={sphereRef as React.Ref<THREE.Mesh>} args={[0.42, 64, 64]}>
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={0.4}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.3}
            iridescence={0.5}
            iridescenceIOR={1}
            color="#ffffff"
            transmission={0.95}
            roughness={0.01}
          />
        </Sphere>
      </group>
    </Float>
  );
}

