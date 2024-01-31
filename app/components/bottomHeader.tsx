'use client'
// app/components/bottomHeader.tsx
import React, {useState, useRef} from "react";
import {CSSTransition} from "react-transition-group";
import styles from "../styles/bottomHeader.module.scss"
import "../../app/globals.css";
import Link from "next/link";
import { arr } from "../data";
import {useRecoilState} from "recoil";
import {pageAtom} from "@/store/atoms";

export default () => {
    const [select, setSelect] = useState(0);
    const nodeRef = useRef(null);
    const [select2, setSelect2] = useState(false)
    const [page, setPage] = useRecoilState(pageAtom);



    React.useEffect(() => {
        console.log(select)
    }, [select]);


    return <>
        <div className={styles.root}>
            {arr.map((el, index) => <div key={index}
                                         className={styles.element}
                                         onMouseEnter={() => setSelect(index)}
                                         onMouseLeave={() => setSelect(0)}
                                         onClick={() => setPage(el.label)}>{el.label}
            </div>)}
        </div>

        <CSSTransition nodeRef={nodeRef} in={select} timeout={200} classNames="my-node">
            <div onMouseEnter={() => setSelect(select)}
                 onMouseLeave={() => setSelect(0)}
                 style={select === 5 ? {height: 0} : {}}
                 ref={nodeRef}>
                {select > 0 ? <ol className={styles.list}>
                    {arr[select].arr.map((el, ind) => typeof el === "string" ? <li onClick={() => setPage(el)} className={styles.listElem}
                                                                                   key={ind}>{el}</li> : <li
                        className={styles.listElem}
                        onMouseEnter={() => setSelect2(true)}
                        onClick={() => setPage(el.label)}
                        onMouseLeave={() => setTimeout(() => {
                            setSelect2(false)
                        }, 3000)}
                    >{el.label}</li>)}
                </ol> : null}
                {
                    select2 ? <ul className={styles.listNew}
                                  onMouseEnter={() => setSelect2(true)}
                                  onMouseLeave={() => setSelect2(false)}
                    >
                        {arr[7].arr[0].arr.map((el, ind) => <li className={styles.listElem} onClick={() => setPage(el)} key={ind}>
                            {el}
                        </li>)}
                    </ul> : null
                }
            </div>
        </CSSTransition>
        <div className={styles.classNo}>
            <h2 style={{position: "fixed", top: "50%"}}>
                {`Здесь должна быть страница "${page}"`}
            </h2>
        </div>
    </>
};
