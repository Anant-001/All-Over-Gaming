import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function GamingRoom() {
    const roomRef = useRef();
    const { scene } = useGLTF('/Modal/3d_gaming_room_with_gaming_setup.glb');

    useEffect(() => {
        // Animate the model with GSAP
        gsap.to(roomRef.current.rotation, {
            y: Math.PI * 2,
            duration: 50,
            repeat: -1,
            ease: 'power1.inOut'
        });

        gsap.to(roomRef.current.position, {
            y: '+=0.2',
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: 'sine.inOut'
        });
    }, []);

    return (
        <primitive object={scene} ref={roomRef} scale={0.2} position={[0, -2.3, 0]} />
    );
}
