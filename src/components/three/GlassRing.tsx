"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Glass Ring - Client Component
 * Abstract glass-like torus object with performance optimizations
 */
interface GlassRingProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    speed?: number;
    reverse?: boolean;
    isVisible?: boolean;
    sharedGeometry?: THREE.BufferGeometry;
}

export default function GlassRing({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,
    speed = 0.002,
    reverse = false,
    isVisible = true,
    sharedGeometry,
}: GlassRingProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setOpacity(0.95), 100);
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
        meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.15;
        meshRef.current.position.x = position[0] + Math.cos(time * 0.5 + position[1]) * 0.1;

        // 2. Mouse Parallax
        const targetRotationX = rotation[0] + (mouse.y * 0.2);
        const targetRotationY = rotation[1] + (mouse.x * 0.2);

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, delta * 2);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, delta * 2);

        // Slow baseline rotation
        meshRef.current.rotation.z += delta * 0.08 * direction;

        // Pulse glow
        if (glowRef.current) {
            (glowRef.current.material as THREE.Material).opacity = 0.1 + Math.sin(time) * 0.05;
        }
    });

    return (
        <group position={position} rotation={rotation} scale={scale}>
            <mesh ref={meshRef} geometry={sharedGeometry}>
                {!sharedGeometry && <torusGeometry args={[1, 0.25, 8, 32]} />}
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.2}
                    roughness={0.01}
                    transmission={0.98}
                    thickness={1.2}
                    envMapIntensity={2}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    ior={2.4} // Higher IOR for diamond-like refraction
                    transparent
                    opacity={opacity}
                />
            </mesh>

            {/* Subtle Lime Core Glow */}
            <mesh>
                <torusGeometry args={[1, 0.05, 8, 32]} />
                <meshBasicMaterial
                    color="#bef264"
                    transparent
                    opacity={isVisible ? 0.2 : 0}
                    wireframe
                />
            </mesh>
        </group>
    );
}
