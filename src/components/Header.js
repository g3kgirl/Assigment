import img from "../images/Img1.png"
import { AppBar,  Badge,  Icon,  IconButton, InputBase,Toolbar,  } from '@mui/material';

import {styled} from "@mui/material/styles"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
     justifyContent:"space-around"
})
const Address = styled("div")(({theme})=>({
  display:"none",
    backgroundColor:"white",
    borderRadius:"5px",
border:"1px solid gray",
[theme.breakpoints.up("sm")] : {
  display:"flex"
}

}))

const AddUser = styled("div")(({theme})=>({
  display:"none",
    
[theme.breakpoints.up("sm")] : {
  display:"flex",
  gap:"10px"
}

}))
const Header = ({size,setShow}) => {
  
    
    return(
       <AppBar color="inherit" position="sticky">
        <StyledToolbar>
        <img src={img} onClick={()=>setShow(true)} />
        <Address>
        <LocationOnSharpIcon/>
         <InputBase   placeholder=" Enter address...."/>
        </Address>
        <Address>
     <InputBase placeholder=" Search for product"/>
    
         </Address>    

<AddUser>
<AccountCircleRoundedIcon   /> Singup/Login
</AddUser>


<IconButton onClick={()=> setShow(false)} aria-label="cart">
  <Badge  badgeContent={size} color="secondary">
    <ShoppingCartIcon />
  </Badge>
</IconButton>


 </StyledToolbar>  
</AppBar>
    )
}

export default Header