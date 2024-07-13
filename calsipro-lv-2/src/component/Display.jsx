
import styles from "./Screen.module.css"

const Display = ({displayValue}) => {
  return <input type="text" placeholder=""className={styles.screen} value={displayValue} readOnly/>

}
export default Display