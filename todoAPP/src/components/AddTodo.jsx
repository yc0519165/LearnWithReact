
import React from 'react'

const AddTodo = () => {
  return (
    <div class="row">
    <div class="col-4"><input type="text" placeholder="Enter Todo here" /></div>
    <div class="col-2"><input type="date"/></div>
    <div class="col-4"><button type="button" class="btn btn-success">Add</button></div>
    </div>

  )
}

export default AddTodo