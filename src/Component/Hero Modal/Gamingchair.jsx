// GamingChair.js
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function GamingChair() {
    const ref = useRef();
    const { scene } = useGLTF('public/Modal/gaming_chair_kiiro.glb');

    useEffect(() => {
        // Add floating + spin animation
        gsap.to(ref.current.rotation, {
            y: Math.PI * 2,
            duration: 8,
            repeat: -1,
            ease: "power1.inOut",
        });

        gsap.to(ref.current.position, {
            y: "+=0.2",
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <primitive object={scene} ref={ref} scale={0.4} position={[0, -1, 0]}  />
    );
}
