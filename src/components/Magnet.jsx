import React, { useState, useEffect, useRef } from 'react';

const Magnet = ({ children, magnetStrength = 4 }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const magnetRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const el = magnetRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

            if (distance < 150) {
                 const offsetX = (e.clientX - centerX) / magnetStrength;
                 const offsetY = (e.clientY - centerY) / magnetStrength;
                 setPosition({ x: offsetX, y: offsetY });
            } else {
                 setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [magnetStrength]);
    
    return (
        <div ref={magnetRef} style={{
            display: 'inline-block',
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            transition: 'transform 0.2s ease-out',
            willChange: 'transform'
        }}>
            {children}
        </div>
    );
};

export default Magnet; 