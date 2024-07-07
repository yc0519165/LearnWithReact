

const DateItem = () =>{
  return <div className="row rowitem">
  <div className="col-6"><input type="text" placeholder='enter  Todo here' /></div>
  <div className="col-4"><input type="date"/></div>
  <div className="col-2"><button type="button" className="btn  btn-success addbtn">Add</button></div>
  </div>
}

export default DateItem