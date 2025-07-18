import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({ texts, rotationInterval = 2000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const next = useCallback(() => {
        if (!texts || texts.length === 0) return;
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, [texts]);

    useEffect(() => {
        if (!texts || texts.length === 0) return;
        const intervalId = setInterval(next, rotationInterval);
        return () => clearInterval(intervalId);
    }, [next, rotationInterval, texts]);

    if (!texts || texts.length === 0) return null;

    return (
        <span style={{ display: 'inline-flex', verticalAlign: 'bottom', height: '1.2em', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentTextIndex}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ display: 'inline-block' }}
                >
                    {texts[currentTextIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default RotatingText; 