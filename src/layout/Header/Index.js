import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/system";
import {  Alert, Badge, Grid, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from "react-redux";
import { fectchLogout } from "../../redux/login/Actions";
import { IS_STATUS_LOGIN } from "../../redux/login/Types";
import LogoutIcon from '@mui/icons-material/Logout';
import Cart from "../../components/Cart";
import { search, setSearch } from "../../redux/shopping/Shopping-actions";
export default function Index() {
  const [user,setUser] = useState({})
  const [displayCart,setDisplayCart] = useState(false)
  const statusLogin = useSelector(state => state.user.statusLogin);
  const loginSuccess = useSelector(state => state.user.loginSuccess)
  const searchKeyword = useSelector(state => state.shop.searchKeyword)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if(localStorage.getItem('user'))
  {
    const item = JSON.parse(localStorage.getItem('user'));
    setUser(item)
    dispatch({type : IS_STATUS_LOGIN ,dispatch : ""})
  }
  },[localStorage.getItem('user')])
  const handleClose = () => {
    setAnchorEl(null);

  };
  const handleLogout = () => {
    dispatch(fectchLogout())
    localStorage.removeItem('user')
    navigate('/product/')
    
  }
  const changeInputSearch = (e) => {
    dispatch(search(e.target.value))
  }
  const setInputSearch = () => {
    dispatch(setSearch(searchKeyword))
  }
  return (
    <Container  sx={{ flexGrow: 1 }}>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>

      <Grid container columnSpacing={4} justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={2}>
         <Link to='/product/'><img
            style={{ borderRadius: "50%", width: "100%" }}
            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/293970437_3390497011276543_2964876197617690666_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w1wgcnNS2QMAX_bZskD&_nc_ht=scontent.fdad3-5.fna&oh=00_AT8C4aGA20FA0snMFiuPQdfym5VD5gmZpQFiA994PlZrOA&oe=630CBD3C"
            alt="logo"
          /></Link>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField onChange={changeInputSearch} value={searchKeyword} fullWidth label="Search" variant="outlined" />
            <Link to='search/'><Button onClick={setInputSearch} variant="outlined" startIcon={<SearchIcon />}>Search</Button></Link>
          </div>
        </Grid>
        <Grid sx={{display : "flex" , alignItems : "center"}} item xs={1}>
          <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <AccountCircleIcon color="primary" fontSize="large"/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       <div style={{display : (statusLogin) ? "block" : "none"}}> 
        <MenuItem onClick={handleClose}>{user.username}</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem  onClick={() => {handleLogout() ; handleClose()}}><LogoutIcon/>Logout</MenuItem>
        </div>
       <div style={{display : (!statusLogin) ? "block" : "none"}}> 
       <Link to='product/login'> <MenuItem onClick={handleClose}>Login</MenuItem></Link>
        
        </div>
      </Menu>
      <Badge sx={{position : "relative"}} color="secondary" badgeContent={loginSuccess.listCarts.length}>
        <ShoppingBagOutlinedIcon onClick={() => setDisplayCart(!displayCart)} fontSize="large" sx={{ cursor :"pointer"}}/>
        <Cart display={displayCart}/>
      </Badge>
        </Grid>
      </Grid>
    </Container>
  );
}
