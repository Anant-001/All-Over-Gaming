import React, {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import GamingChair from '../Component/Hero Modal/GamingChair.jsx'
import BookingSlot from "../Component/BookingSlot.jsx";
import { motion, AnimatePresence } from 'framer-motion'

const BookingSection = () => {
    /* const navigate = useNavigate();*/
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="booking">
            <div className="flex items-center justify-between min-h-50 px-8 py-12 bg-gray-900">
                <div className="w-1/2">
                    <figure>
                        <div className="h-[600px] w-full">
                            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[5, 5, 5]} />
                                <Suspense fallback={null}>
                                    <GamingChair />
                                </Suspense>
                                <OrbitControls />
                            </Canvas>
                        </div>
                    </figure>
                </div>

                <div className="w-1/2 pl-12">
                    <div className="max-w-lg">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Now you can Book Your Slot
                        </h2>
                        <button
                            onClick={() => setShowModal(true)}
                            /*  onClick={() => navigate(<BookingSlot />)}
                           /* onClick={() => {
                                  // Add your booking slot logic here
                                  console.log("Booking slot clicked");
                              }}*/
                            className="px-8 py-3 text-lg font-semibold rounded-lg bg-purple-600 text-white
                                 transition-all duration-300 ease-in-out
                                 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50
                                 active:transform active:scale-95"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {showModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                            onClick={() => setShowModal(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                className="relative"
                                onClick={e => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                                    onClick={() => setShowModal(false)}
                                >
                                    ✕
                                </button>
                                <BookingSlot />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
export default BookingSection

