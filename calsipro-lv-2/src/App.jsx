import Display from "./component/Display"
import Buttons from "./component/Buttons"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css'
import { useState } from "react"

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C'){
      setcalVal("")
    }else if (buttonText ==='='){
      const result = eval(calVal)
      setcalVal(result)
    }else {
      const newDisplayValue = calVal + buttonText;
      setcalVal (newDisplayValue)
    }
  }

  return  <center>
    <div className={styles.container}>
      <Display displayValue = {calVal}></Display>
      <Buttons
       onButtonClick={onButtonClick}></Buttons>
    </div>
  </center>
  
}

export default App
