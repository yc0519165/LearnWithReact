import TodoItem from "./TodoItem"

const TodoItems = ({todoItems, onDeleteClick}) => {
  return (
    <div className="row">
    {todoItems.map((item) =>{
      <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
    })}</div>
  )
}
export default TodoItems