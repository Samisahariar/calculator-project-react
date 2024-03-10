import Display from "../components/Display";
import styles from "../src/App.module.css"
import Card from "../components/Card"

const App = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.inputContainer}>
        <Display></Display>
      </div>
      <div className={styles.buttonContainer}>
        <Card></Card>
      </div>
    </div>
  );
}
export default App; 
