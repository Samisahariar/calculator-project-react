import styles from "../src/App.module.css"
const CardLIne = ({ buttonLine }) => {
    const [first, second, third, fourth] = buttonLine
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button}>{first}</button>
            <button className={styles.button}>{second}</button>
            <button className={styles.button}>{third}</button>
            <button className={styles.button}>{fourth}</button>
        </div>
    );
}
export default CardLIne;