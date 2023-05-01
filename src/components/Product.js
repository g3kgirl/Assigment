import { useEffect, useState } from "react"
 import ProductCard from "./ProductCard";
import {Box, Button} from '@mui/material';
const Product = ({addTocart}) => {
const [product, setProduct] = useState([])

//  console.log(cart)

async function getProduct(){
    const data = await fetch("https://fakestoreapi.com/products/")
setProduct(await  data.json())

}
useEffect(() => {
    getProduct();
console.log(product);
 }, []);


 return( <>
<div>
<Box display="flex"
flexDirection="row"
flexWrap="wrap"
justifyContent="center"
>
{product.map((productItem)=>{

     return <ProductCard item={productItem}   key={productItem.id} addTocart={addTocart} />
 })}
    
</Box>
 
            
</div>

   </> )
}

export default Product