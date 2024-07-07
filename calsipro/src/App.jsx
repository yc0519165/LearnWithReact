import Display from "./component/Display"
import Buttons from "./component/Buttons"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css'

function App() {


  return  <center>
    <div className={styles.container}>
      <Display></Display>
      <Buttons></Buttons>
    </div>
  </center>
  
}

export default App
