import React, { useRef, useCallback } from 'react';

const ClickSpark = ({ children, ...props }) => {
    const sparkRef = useRef(null);

    const handleClick = useCallback((e) => {
        const spark = sparkRef.current;
        if (!spark) return;

        const rect = spark.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = `${Math.random() * 5 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            particle.style.background = `hsl(${Math.random() * 60 + 220}, 100%, 70%)`;
            particle.style.pointerEvents = 'none';
            
            spark.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const duration = Math.random() * 0.5 + 0.5;

            particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }, []);

    return (
        <div ref={sparkRef} onClick={handleClick} style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}>
            {children}
        </div>
    );
};

export default ClickSpark; 