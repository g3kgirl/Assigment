import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import {useState} from "react"

function App() {
  const [cart,setCart] = useState([])
const[show,setShow] = useState([])


const addTocart = (item)=> {
let isPresent = false;
cart.forEach((product)=>{
  if(item.id === product.id)
  isPresent = true;
})
if (isPresent)
return;

setCart([...cart,{...item,quantity : 1}]);
}

const handleChange = (cartItem, d) => {
  let ind = 1;
  cart.forEach((data,index)=>{
    if(data.id === cartItem.id)
    ind = index;
  })
  const tempArr = cart;
  tempArr[ind].quantity += d;
  if(tempArr[ind].quantity === 0)
  tempArr[ind].quantity = 1;
  setCart([...tempArr])
}

  return (
    <>
 <Header size={cart.length} setShow={setShow} />
 {
  show ? <Product addTocart={addTocart}   /> :  <Cart cart={cart} setCart={setCart} handleChange={handleChange} />

 }
  
 
    </>
  );
}

export default App;
