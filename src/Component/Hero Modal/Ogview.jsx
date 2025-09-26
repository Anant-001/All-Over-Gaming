import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { JaneModel } from './JaneModel';
import { Suspense } from 'react';

const Ogview = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <JaneModel scale={3.5} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
export default Ogview;


