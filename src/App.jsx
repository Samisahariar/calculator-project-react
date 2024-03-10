import Display from "../components/Display";
import styles from "../src/App.module.css"
import Card from "../components/Card"
import { useState } from "react";

const App = () => {
  const [initialValue, setValue] = useState("")

  const onButtonClick = (button) => {
    if (button === "C") {
      setValue("")
    }else if (button === "="){
      const result = eval(initialValue);
      setValue(result);
    }else{
      const displayValue = initialValue + button;
      setValue(displayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.inputContainer}>
        <Display displayValue={initialValue}></Display>
      </div>
      <div className={styles.buttonContainer}>
        <Card onButtonClick={onButtonClick}></Card>
      </div>
    </div>
  );
}
export default App; 
