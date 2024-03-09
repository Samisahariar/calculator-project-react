import styles from "./App.module.css"
import Display from "../components/display";


const App = () =>{
  return(
    <div className={styles.calculator}>
      <Display></Display>
      <div className={styles.buttonContainer}> 
        <button className={styles.button}>C</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
      </div>
    </div>
  );
}
export default App;
