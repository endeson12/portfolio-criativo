import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './TiltedCard.css';

const TiltedCard = ({ imageSrc, ...props }) => {
    const ref = useRef(null);
    const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });
    const scale = useSpring(1, { damping: 20, stiffness: 150 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        rotateX.set((offsetY / (rect.height / 2)) * -10);
        rotateY.set((offsetX / (rect.width / 2)) * 10);
    };

    const handleMouseEnter = () => scale.set(1.05);
    const handleMouseLeave = () => {
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div className="tilted-card-container" ref={ref} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <motion.div className="tilted-card-inner" style={{ rotateX, rotateY, scale }}>
                <img src={imageSrc} alt="Project visual" />
            </motion.div>
        </div>
    );
};

export default TiltedCard; 