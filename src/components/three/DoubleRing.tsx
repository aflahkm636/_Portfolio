"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Double Ring - Client Component
 * Two intersecting glass-like rings with counter-rotation
 */
export default function DoubleRing({
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
    const groupRef = useRef<THREE.Group>(null);
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (!isVisible) return;
        const time = state.clock.getElapsedTime();

        if (ring1Ref.current) {
            ring1Ref.current.rotation.x += delta * 0.3;
            ring1Ref.current.rotation.y += delta * 0.2;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.x -= delta * 0.2;
            ring2Ref.current.rotation.z += delta * 0.3;
        }
        if (groupRef.current) {
            groupRef.current.position.y = position[1] + Math.sin(time) * 0.2;
        }
    });

    const materialProps = {
        color: "#ffffff",
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.9,
        thickness: 0.5,
        transparent: true,
        opacity: 0.8,
    };

    return (
        <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
            <mesh ref={ring1Ref}>
                <torusGeometry args={[1, 0.1, 16, 48]} />
                <meshPhysicalMaterial {...materialProps} />
            </mesh>
            <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.8, 0.08, 16, 48]} />
                <meshPhysicalMaterial {...materialProps} />
            </mesh>

            {/* Center Core */}
            <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshBasicMaterial color="#bef264" transparent opacity={0.4} />
            </mesh>
        </group>
    );
}
