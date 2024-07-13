import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem1 from "./components/TodoItem1";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'


function APP (){
  return <center>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItem></TodoItem>
    <TodoItem1></TodoItem1>
    
  </center>
}

export default APP;