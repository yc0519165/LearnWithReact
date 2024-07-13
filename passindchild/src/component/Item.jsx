

export const Item = () => {
  let foodItem = ["Badam","Caju", "Ghee","Milk","Banana","Veg"]

  return (
    <ul className="list-group">
    {foodItem.map((item)=>
          <li key={item}className="list-group-item">{item} <button className="btn btn-success"
          onClick={() => console.log(`${item} Are Purchase`)}>Buy</button></li>

      )}
</ul>
  )
}
export default Item
