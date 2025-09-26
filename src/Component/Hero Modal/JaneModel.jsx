// JaneModel.js
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function JaneModel(props) {
    const group = useRef();
    const { scene } = useGLTF('/public/Modal/jane_doe_blender_release.glb');

    useEffect(() => {
        if (group.current) {
            gsap.to(group.current.rotation, {
                y: Math.PI * 2,
                duration: 5,
                repeat: -1,
                ease: 'power1.inOut',
            });
        }
    }, []);

    return <primitive object={scene} ref={group} {...props} />;
}
/*
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function JaneModel(props) {
    const modelRef = useRef();
    const { scene } = useGLTF('/public/Modal/jane_doe_blender_release.glb');

    useEffect(() => {
        if (modelRef.current) {
            gsap.to(modelRef.current.rotation, {
                y: Math.PI * 2,
                duration: 10,
                repeat: -1,
                ease: 'power1.inOut',
            });
        }
    }, []);

    return (
        <primitive
            object={scene}
            ref={modelRef}
            scale={props.scale || 1}
            position={props.position || [0, -1, 0]}
        />
    );
}
*/