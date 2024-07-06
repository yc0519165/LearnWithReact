
function LiveDate () {
  let time = new Date();
  return <div className="third">This ti the current time:{time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
}

export default LiveDate