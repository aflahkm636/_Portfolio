"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Geometric Crystal - Client Component
 * A multi-faceted glass-like crystal (Icosahedron) with inner glow
 */
interface GeometricCrystalProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    speed?: number;
    reverse?: boolean;
    isVisible?: boolean;
    sharedGeometry?: THREE.BufferGeometry;
    sharedInnerGeometry?: THREE.BufferGeometry;
}

export default function GeometricCrystal({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,
    speed = 0.003,
    reverse = false,
    isVisible = true,
    sharedGeometry,
    sharedInnerGeometry,
}: GeometricCrystalProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const innerMeshRef = useRef<THREE.Mesh>(null);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setOpacity(0.9), 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPrefersReducedMotion(
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            );
        }
    }, []);

    useFrame((state, delta) => {
        if (!meshRef.current || !isVisible || prefersReducedMotion) return;

        const { mouse } = state;
        const time = state.clock.getElapsedTime();
        const direction = reverse ? -1 : 1;

        // 1. Organic Floating
        meshRef.current.position.y = position[1] + Math.cos(time * 0.8 + position[0]) * 0.15;
        meshRef.current.position.z = position[2] + Math.sin(time * 0.5 + position[1]) * 0.1;

        // 2. Mouse Parallax
        const targetRotationX = rotation[0] + (mouse.y * 0.25);
        const targetRotationY = rotation[1] + (mouse.x * 0.25);

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, delta * 2);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, delta * 2);

        // Continuous rotation
        meshRef.current.rotation.z += delta * 0.15 * direction;

        // Pulse the inner glow
        if (innerMeshRef.current) {
            const pulse = 0.8 + Math.sin(time * 2) * 0.2;
            innerMeshRef.current.scale.setScalar(pulse);
        }
    });

    return (
        <group position={position} rotation={rotation} scale={scale}>
            {/* Main Outer Crystal */}
            <mesh ref={meshRef} geometry={sharedGeometry}>
                {!sharedGeometry && <icosahedronGeometry args={[0.8, 0]} />}
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.1}
                    roughness={0.05}
                    transmission={0.95}
                    thickness={1}
                    envMapIntensity={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                    transparent
                    opacity={opacity}
                />
            </mesh>

            {/* Inner Glow Core */}
            <mesh ref={innerMeshRef} geometry={sharedInnerGeometry}>
                {!sharedInnerGeometry && <icosahedronGeometry args={[0.3, 0]} />}
                <meshBasicMaterial
                    color="#bef264" // Lime green accent
                    transparent
                    opacity={isVisible ? 0.4 : 0}
                />
            </mesh>

            {/* Inner Glow Aura */}
            <mesh scale={0.45} geometry={sharedGeometry}>
                {!sharedGeometry && <icosahedronGeometry args={[1, 0]} />}
                <meshBasicMaterial
                    color="#bef264"
                    transparent
                    opacity={isVisible ? 0.15 : 0}
                    wireframe
                />
            </mesh>
        </group>
    );
}
