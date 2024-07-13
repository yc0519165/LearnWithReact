

const Input = ({handelKeyDown}) => {
  return (
    <input 
    type="text" 
    placeholder="type anything" 
    className="search"
    onKeyDown={handelKeyDown}
     />
  )
}
export default Input
