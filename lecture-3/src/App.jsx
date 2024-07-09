import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItem from "./component/FoodList";

function App() {
// <React.Fragment>..</React.fragment> & <> </> This the fragment 
//this are use to grouping multiple element without extra DOM Nodes
// imp== import the react file after will run map method

// this is the map method to use bulk of data in one line 
// add class in map invalid properties to use className
//key assign unic key optimize re-render


  let foodItem = ["Badam","Caju","Ghee","Milk","Banana","Veg"]

  return (
  <>
    <h1>Healthy Food</h1>
    <ul className="list-group">
      {foodItem.map((item)=>
        <li key={item}className="list-group-item">{item}</li>
      )}
      
{/* Passing Data via Props   */}
</ul>
    <h1 className="head">Fast Food</h1>
    <FoodItem></FoodItem>
  </>


  )
}

export default App
