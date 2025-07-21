import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './TiltedCard.css';

const TiltedCard = ({
  imageSrc,
  altText = "Card Image",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
}) => {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 150, mass: 0.1 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 150, mass: 0.1 });
  const scale = useSpring(1, { damping: 20, stiffness: 150, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={ref}
      className="tilted-card-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
        />
      </motion.div>
    </div>
  );
};

export default TiltedCard; 