import styles from "../src/App.module.css"
const Card = ({onButtonClick}) =>{
    const buttons = [ 
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0"]
    
    return(
        <div className="buttonContainer">
            {
                buttons.map(button => (
                    <button className={styles.button} onClick={() => onButtonClick(button)}>{button}</button>
                ))
            }
        </div>
    )
}
export default Card;