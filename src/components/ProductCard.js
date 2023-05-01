 import {Box,Button,} from '@mui/material';
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({item, addTocart,handleChange,cartItem} ) => {
    const {description, id,image,price,} = item
    return(
<Box  width="300px"
boxShadow= "-1px 5px 10px 5px rgba(42, 42, 42, 0.2)"
padding="10px"
margin="20px"
display="flex"
flexDirection="column"
alignItems="center"> 
 <div style={{width:"150px",}}> 
<img src={image} width="100%" />
 </div>
<p>{description}</p>
<p> ${price}</p>
<Box display="flex"
flexDirection="row">
     
<Button variant="contained" onClick={() => addTocart(item)}  startIcon={<AddShoppingCartIcon />}  >Add to cart</Button>
</Box>

</Box>
    )
}

export default ProductCard;