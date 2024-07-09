import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./component/Container"

function App() {

  let foodItem = ["Badam","Caju","Ghee","Milk","Banana","Veg"]

  return (
    <>
    <Container>
    <h1>Healthy Food</h1>
    <input type="text" placeholder="type anything" className="search" onChange={(event) => console.log(event.target.value)} />
    <ul className="list-group">
      {foodItem.map((item)=>
          <li key={item}className="list-group-item">{item} <button className="btn btn-success"
          onClick={() => console.log(`${item} Purchase the item`)}>Buy</button></li>

      )}
</ul>
</Container>
{/* <Container>
  <p>This is the very good foods in this list</p>
</Container> */}


</>
  )
}

export default App
