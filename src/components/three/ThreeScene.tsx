"use client";

import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import GlassRing from "./GlassRing";
import GeometricCrystal from "./GeometricCrystal";

/**
 * Three.js Performance Controller
 * Caps FPS at 30 to save CPU/GPU cycles and reduce TBT
 */
function PerformanceMonitor({ isVisible, targetFPS = 30 }: { isVisible: boolean, targetFPS?: number }) {
    const { gl } = useThree();
    const lastTime = useRef(0);

    useFrame((state) => {
        if (!isVisible) return;

        // FPS capping logic to save CPU/GPU cycles
        const time = state.clock.getElapsedTime();
        if (time - lastTime.current < 1 / targetFPS) {
            state.gl.render(state.scene, state.camera);
            return;
        }
        lastTime.current = time;
    }, 1);

    return null;
}

/**
 * Scene Content - Client Component
 */
function SceneContent({ isVisible }: { isVisible: boolean }) {
    // Shared materials and geometries to reduce draw calls and memory usage
    const resources = useMemo(() => ({
        glassMaterial: new THREE.MeshPhysicalMaterial({
            color: "#ffffff",
            metalness: 0.1,
            roughness: 0.05,
            transmission: 0.95,
            thickness: 1,
            envMapIntensity: 1.5,
            clearcoat: 1,
            clearcoatRoughness: 0.05,
            transparent: true
        }),
        ringGeometry: new THREE.TorusGeometry(1, 0.25, 8, 32),
        crystalGeometry: new THREE.IcosahedronGeometry(0.8, 0),
        innerCrystalGeometry: new THREE.IcosahedronGeometry(0.3, 0),
        limeMaterial: new THREE.MeshBasicMaterial({ color: "#bef264", transparent: true, opacity: 0.2 })
    }), []);

    // Cleanup resources on unmount
    useEffect(() => {
        return () => {
            Object.values(resources).forEach(res => res.dispose());
        };
    }, [resources]);

    return (
        <>
            <PerformanceMonitor isVisible={isVisible} />

            {/* Lighting - Balanced for Performance */}
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#bef264" />

            {/* Environment - ciudad preset is small and efficient */}
            <Suspense fallback={null}>
                <Environment preset="city" />
            </Suspense>

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                <GlassRing
                    position={[-3.5, 2.2, -1]}
                    rotation={[0.8, 0.3, 0.2]}
                    scale={1.2}
                    isVisible={isVisible}
                    sharedGeometry={resources.ringGeometry}
                />
            </Float>

            <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.2}>
                <GeometricCrystal
                    position={[3.5, 1.8, -1.5]}
                    rotation={[0.3, 0.2, 0.5]}
                    scale={1.1}
                    isVisible={isVisible}
                    sharedGeometry={resources.crystalGeometry}
                    sharedInnerGeometry={resources.innerCrystalGeometry}
                />
            </Float>

            <Float speed={1} rotationIntensity={0.4} floatIntensity={0.5}>
                <GeometricCrystal
                    position={[-3.2, -1.8, -1]}
                    rotation={[0.2, 0.8, 0.3]}
                    scale={1.3}
                    isVisible={isVisible}
                    sharedGeometry={resources.crystalGeometry}
                    sharedInnerGeometry={resources.innerCrystalGeometry}
                />
            </Float>

            <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
                <GlassRing
                    position={[3.5, -2, -2]}
                    rotation={[0.4, -0.3, 0.2]}
                    scale={0.8}
                    isVisible={isVisible}
                    sharedGeometry={resources.ringGeometry}
                />
            </Float>
        </>
    );
}

export default function ThreeScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        // Tab Visibility
        const handleVisibility = () => setIsTabVisible(document.visibilityState === "visible");
        document.addEventListener("visibilitychange", handleVisibility);

        // Reduced Motion
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const mqHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener("change", mqHandler);

        // Intersection Observer
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibility);
            mq.removeEventListener("change", mqHandler);
            observer.disconnect();
        };
    }, []);

    const isVisible = isInView && isTabVisible && !reducedMotion;

    if (reducedMotion) return <div className="absolute inset-0 bg-[#000000]" />;

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                dpr={[1, 1.2]} // Capped DPR for performance
                gl={{
                    powerPreference: "high-performance",
                    antialias: false, // Antialias: false for mobile performance boost
                    stencil: false,
                    depth: true
                }}
                frameloop={isVisible ? "always" : "demand"}
            >
                <Suspense fallback={null}>
                    <SceneContent isVisible={isVisible} />
                </Suspense>
            </Canvas>
        </div>
    );
}
