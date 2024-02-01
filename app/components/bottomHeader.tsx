import React, { useState } from 'react';
import styles from "../styles/bottomHeader.module.scss";
import { data } from "../data";
import { motion } from 'framer-motion';
import AnimatedCard from "@/components/AnimatedCard";

const BottomHeader = () => {
    const [select, setSelect] = useState<number | false>(false);
    const [activeSecondLevel, setActiveSecondLevel] = useState<number | null>(null); // Добавлено новое состояние

    return (
        <>
            <div className={styles.root}>
                {data.map((el, ind) => (
                    <div
                        className={styles.element}
                        key={ind}
                        onMouseLeave={() => {
                            setSelect(false);
                            setActiveSecondLevel(null); // Сбрасываем активный элемент второго уровня при уходе курсора с элемента первого уровня
                        }}
                        onMouseEnter={() => setSelect(ind + 1)}
                    >
                        {el.label}
                    </div>
                ))}
            </div>
            <AnimatedCard isVisible={!!select && select !== 5}>
                <div
                    className={styles.menu}
                    onMouseLeave={() => {
                        setSelect(false);
                        setActiveSecondLevel(null); // Сбрасываем активный элемент второго уровня при уходе курсора с меню
                    }}
                >
                    <ul className={styles.list}>
                        {data[Number(select) - 1]?.arr?.map((element, index) => (
                            <li
                                className={styles.listElem}
                                key={index}
                                onMouseEnter={() => setActiveSecondLevel(index)} // Устанавливаем активный элемент второго уровня
                                onMouseLeave={() => setActiveSecondLevel(null)} // Сбрасываем активный элемент второго уровня
                            >
                                {element.label}
                                {element?.arr ? "    >" : null}
                                {/* Показываем дополнительный контент для активного элемента второго уровня */}
                                {activeSecondLevel === index && element.arr && (
                                    <ul className={styles.listNew}>
                                        {element.arr.map((el, idx) => (
                                            <li className={styles.listElem} key={idx}>{el.label}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </AnimatedCard>
        </>
    );
};

export default BottomHeader;
