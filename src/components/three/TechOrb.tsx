"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Tech Orb - Client Component
 * A holographic wireframe sphere with a glowing core
 */
export default function TechOrb({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,
    isVisible = true,
}: {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    isVisible?: boolean;
}) {
    const coreRef = useRef<THREE.Mesh>(null);
    const shellRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (!isVisible) return;
        const time = state.clock.getElapsedTime();

        if (coreRef.current) {
            coreRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
        }
        if (shellRef.current) {
            shellRef.current.rotation.y += delta * 0.2;
            shellRef.current.rotation.x += delta * 0.1;
        }
        if (ringRef.current) {
            ringRef.current.rotation.z += delta * 0.5;
            ringRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
        }
    });

    return (
        <group position={position} rotation={rotation} scale={scale}>
            {/* Inner Glowing Core */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshBasicMaterial color="#bef264" transparent opacity={0.6} />
            </mesh>

            {/* Outer Holographic Shell */}
            <mesh ref={shellRef}>
                <sphereGeometry args={[0.8, 16, 16]} />
                <meshPhongMaterial
                    color="#bef264"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#bef264"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Vertical Orbiting Ring */}
            <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.1, 0.02, 16, 64]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
            </mesh>

            {/* Horizontal Static Ring */}
            <mesh rotation={[0, 0, 0]}>
                <torusGeometry args={[1.2, 0.01, 8, 48]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
            </mesh>
        </group>
    );
}
