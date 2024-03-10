import styles from "../src/App.module.css"
const Display = ( {displayValue} ) =>{
    return (<input type="text" className={styles.inputField} readOnly value={displayValue}/>
        
    );
}
export default Display;