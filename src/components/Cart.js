
import {Box,Button,} from '@mui/material';
import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import {styled} from "@mui/material/styles"


const cartButtons = styled("div")(({theme})=>({
    display:"flex",
    flexDirection:"column",
  [theme.breakpoints.up("sm")] : {
    display:"flex",
    
  }
  
  }))





const Cart = ({cart,setCart,handleChange,}) => {
const [price,setPrice] = useState(0)

const handlePrice = () => {
    let value = 0;
    cart.map((cartItem)=>{
        value += cartItem.price * cartItem.quantity
    })
    setPrice(value);
}
useEffect(()=>{
    handlePrice();
})
const handleRemove = (id)  =>{
    const arr = cart.filter((cartItem)=>cartItem.id !== id);
    setCart(arr);
}
    return(
        <>
{cart.map((cartItem)=>{
    return <div style={{display:"flex", justifyContent:"center"
    

    }}>
            <Card sx={{ display: 'flex' ,width:"70%" ,alignContent:"center" , marginTop:"40px", padding:"10px" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width:"50%" }}>

 <img src={cartItem.image} width="80px" />

<h2>{cartItem.id}</h2> 
    <p>{cartItem.description}</p>
 </Box>


<Box sx={{ display: 'flex', flexDirection: 'column',  }}>
    
    
    
    

<Box sx={{ display: 'flex', flexDirection: 'row', alignItems:"center",gap:"10px",marginTop:"150px" }}>
<cartButtons>
     <Button   variant="outlined" onClick={()=> handleChange(cartItem, -1)}>  -</Button>
   <Button> qn - {cartItem.quantity}</Button>
    
<Button variant="outlined" onClick={()=>handleChange(cartItem, +1)}>+</Button>
<p> ${cartItem.price} / 1pcs</p>
<Button  onClick={()=>{
    handleRemove(cartItem.id);
}}  variant="outlined" startIcon={<DeleteIcon />}>Remove</Button>
</cartButtons>
</Box>

</Box>

</Card>
 </div>
        
})}
<Box sx={{display:"flex",justifyContent:"center" ,  }}>
<p>Total Price of  Cart : ${price}</p>

</Box>
      
        </>

    )
}
export default Cart