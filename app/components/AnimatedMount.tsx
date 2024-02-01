import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
    isVisible: boolean;
    children?: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ isVisible, children }) => {
    const variants = {
        hidden: {
            transformOrigin: 'top', // Точка, от которой будет происходить трансформация
            opacity: 0,
            y: -10
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5, // Продолжительность анимации
                ease: 'easeOut', // Тип анимации для более плавного эффекта
            },
        },
    };



    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={variants}
            style={{ overflow: 'hidden', backgroundColor: 'transparent', position: "relative" }} // Убедитесь, что переполнение скрыто и фон прозрачен
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
