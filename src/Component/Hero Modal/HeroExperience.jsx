import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import GamingRoom from "./GamingRoom.jsx";



const HeroExperience = () => {

    return (
        <div style={{ width: '70vw', height: '70vh' }}>
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                    <GamingRoom />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI /2}
                    maxPolarAngle={Math.PI /2}
                />
            </Canvas>
        </div>

    );
}
export default HeroExperience
