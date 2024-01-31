import styles from "@/styles/menu.module.scss"

function menu() {

    const arr = ["Купить билет", "Стать другом", "Интернет-магазин", "Язык"]

    return (
        <>
            {arr.map((el, index) => <div key={index} className={styles.root}>{el}</div>)}
        </>
    );
}

export default menu;
