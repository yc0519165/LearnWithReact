/* eslint-disable react/jsx-key */
import styles from './Buttons.module.css'

function Buttons ({onButtonClick}) {

  const buttonNames = ["C",1,2,"+",3,4,"-",5,6,"*",7,8,"/","=",9,0,"."];


  return (<div className={styles.btncontainer}>
        {buttonNames.map((buttonName) => (
          <button className={styles.btns} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
        ))}
    </div>
  )
}
export default Buttons