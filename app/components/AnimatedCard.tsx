import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
    isVisible: boolean;
    children?: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ isVisible, children }) => {
    const variants = {
        hidden: {
            scaleY: 0, // Начальное состояние "закрытой книги"
            transformOrigin: 'top', // Точка, от которой будет происходить трансформация
        },
        visible: {
            scaleY: 1, // Конечное состояние "открытой книги"
            transition: {
                duration: 0.2, // Продолжительность анимации
                ease: 'easeOut', // Тип анимации для более плавного эффекта
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={variants}
            style={{ overflow: 'hidden', backgroundColor: 'transparent' }} // Убедитесь, что переполнение скрыто и фон прозрачен
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
