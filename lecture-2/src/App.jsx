import Heading from "./component/Heading"
import Second from "./component/Second"
import LiveDate from "./component/LiveDate"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  return (
    <center className="container">
      <Heading></Heading>
      <Second></Second>
      <LiveDate></LiveDate>
    </center>
  )
}

export default App
