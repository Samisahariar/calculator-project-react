import styles from "./App.module.css"
import Display from "../components/display";
import CardLIne  from "../components/Card";

const App = () =>{
  const buttons = [
    ['C', 1, 2, 3],
    ['+', 4, 5, 6],
    ['-', 7, 8, 9],
    ['*', 10, '=', 'AC']
  ]
  let id = 0
  return(
    <div className={styles.calculator}>
      <Display></Display>
      {
        buttons.map(buttonline => <CardLIne key={id+1} buttonLine={buttonline}></CardLIne>)
      }
      
    </div>
  );
}
export default App;
