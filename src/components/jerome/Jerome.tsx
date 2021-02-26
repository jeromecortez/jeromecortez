import React from 'react';
import { motion, useViewportScroll, useTransform, } from 'framer-motion';
import './Jerome.css';

const Jerome = () => {
    const CONTAINER_HEIGHT = 1000;
    const INPUT_RANGE = [0, 0.25, 0.50, 0.75, 1];
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const { scrollYProgress } = useViewportScroll();
    const containerYValue = useTransform(scrollYProgress, INPUT_RANGE, [0, 0, (viewportHeight * 3) / 2 - CONTAINER_HEIGHT, (viewportHeight * 3) * 0.75 - CONTAINER_HEIGHT,(viewportHeight * 3) * 0.75 - CONTAINER_HEIGHT]);
    const xBasedTranslation = useTransform(scrollYProgress, INPUT_RANGE, [-viewportWidth, -viewportWidth / 2, 0, 0, 0] );
    const yBasedTranslation = useTransform(scrollYProgress, INPUT_RANGE, [viewportWidth, viewportWidth / 2, 0, 0, 0] );

    return (
        <div className="jerome-container">
            <motion.div className="motion-container" style={{ translateY: containerYValue, height: CONTAINER_HEIGHT }}>
                <motion.div className="letter-container" style={{ translateX: xBasedTranslation, translateY: yBasedTranslation }}>I</motion.div>
                <motion.div className="letter-container" style={{ translateX: yBasedTranslation, translateY: xBasedTranslation }}>a</motion.div>
                <motion.div className="letter-container" style={{ translateX: xBasedTranslation, translateY: yBasedTranslation }}>m</motion.div>
                <motion.div className="letter-container" style={{ translateX: yBasedTranslation, translateY: xBasedTranslation }}>J</motion.div>
                <motion.div className="letter-container" style={{ translateX: xBasedTranslation, translateY: yBasedTranslation }}>e</motion.div>
                <motion.div className="letter-container" style={{ translateX: yBasedTranslation, translateY: xBasedTranslation }}>r</motion.div>
                <motion.div className="letter-container" style={{ translateX: xBasedTranslation, translateY: yBasedTranslation }}>o</motion.div>
                <motion.div className="letter-container" style={{ translateX: yBasedTranslation, translateY: xBasedTranslation }}>m</motion.div>
                <motion.div className="letter-container" style={{ translateX: xBasedTranslation, translateY: yBasedTranslation }}>e</motion.div>
            </motion.div>
        </div>
    )
}

export default Jerome;