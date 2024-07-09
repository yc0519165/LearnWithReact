import styles from "./FoodList.module.css"

const FoodItem = () =>{
  return     <ul className={`${styles[`FoodItem`]}list-group`}>
  <li className="list-group-item">Burger</li>
  <li className="list-group-item">Pizza</li>
  <li className="list-group-item">PaniPuri</li>
  <li className="list-group-item">VadaPav</li>
  <li className="list-group-item">Pakoda</li>
  <li className="list-group-item">Jalebi</li>
</ul>  

}

export default FoodItem