import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./component/Container"
import Input from "./component/Input"
import Item from "./component/Item"
import { useState } from "react"

function App() {



  let textStateArr = useState('Food Item Entered by user')
  let textToShow = textStateArr[0]
  let setTextState = textStateArr[1]
  console.log(`Current value of textState:${textToShow}`)

  const onKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      console.log('Food Value enter is' + newFoodItem)
    }
    console.log(event.target.value);
    setTextState(event.target.value)
  }
   

  return (
    <>
    <Container>
    <h1>Healthy Food</h1>
    <Input handleKeyDown={onKeyDown}></Input>
    <p>{textToShow}</p>
    <Item></Item>
</Container>
{/* <Container>
  <p>This is the very good foods in this list</p>
</Container> */}


</>
  )
}

export default App
