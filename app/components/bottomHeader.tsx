'use client'
import React from 'react';
import styles from "../styles/bottomHeader.module.scss";
import { data } from "../data";
import { motion } from 'framer-motion';
import AnimatedCard from "@/components/AnimatedCard";
import {element} from "prop-types";
import {useRecoilState} from "recoil";
import {pageAtom} from "@/store/atoms";


const BottomHeader = () => {
    const [ select, setSelect ] = React.useState<boolean | number>(false);
    const [activeSecondLevel, setActiveSecondLevel] = React.useState<boolean | number>(false);
    const [ page, setPage ] = useRecoilState(pageAtom);

    return <>
        <div className={styles.root} style={select && Number(select) !== 5 ? {borderRadius:  "0"} : {}}>
            {
                data.map((el, ind) => <div
                    className={styles.element}
                    key={ind}
                    onClick={() => setPage(el.description)}

                    onMouseLeave={() => setSelect(false)}
                    onMouseEnter={() => setSelect(ind + 1)}
                    onMouseOver={() => setSelect(ind + 1)}
                >{el.label}</div>)
            }
        </div>
            <AnimatedCard isVisible={!!select && select !== 5}>

            <div
                className={styles.menu}
                onMouseLeave={() => setSelect(false)}
                onMouseOver={() => setSelect(select)}
                onMouseEnter={() => setSelect(select)}
            >
                <ul className={styles.list}>
                    {
                        data[Number(select) - 1] ? data[Number(select) - 1]?.arr?.map((element, index) => <li className={styles.listElem} onClick={() => setPage(element.description)} key={index}>{element.label}{element?.arr ? "    >" : null}</li>) : null
                    }
                </ul>
                    {

                        data[Number(select) - 1]?.arr?.map((element, index) => (
                            element.arr ? <ul className={styles.listNew} key={index}>{element.arr.map((el, idx) => <li className={styles.listElem}  onClick={() => setPage(el.description)} key={idx} onMouseEnter={() => console.log("Здесь должно показываться меню второго уровня")} onMouseLeave={() => console.log("Здесь должно скрываться меню второго уровня")}>{el.label}</li>)}</ul> : null
                        ))
                    }
            </div>
        </AnimatedCard>
        <div className={styles.classNo}>
            <h1>{page}</h1>
        </div>
    </>
};

export default BottomHeader;