import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import React, { Children, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL_BASE } from "../constant/UrlConstant";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
export default function ProfileUser({children}) {
  const username = useSelector((state) => state.user.loginSuccess);
  const [active, setActive] = useState(1);
  return (
    <div style={{ background: "#F0F2F5", padding: "10px" }}>
      <Container sx={{ background: "white", borderRadius: "20px" }}>
        <Stack direction="row">
          <Stack width="30%" borderRight="1px solid #F0F2F5">
            <Avatar
              sx={{ height: "70%", width: "50%" }}
              alt="Remy Sharp"
              src="https://image-us.24h.com.vn/upload/2-2021/images/2021-04-08/mai-dora-2-1617825850-600-width650height813.jpg"
            />
            <MenuList>
              <Link to='/profile_Info'> 
              <MenuItem>
                <ListItemIcon>
                  <InfoIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Infomation</Typography>
              </MenuItem>
              </Link>
             <Link to='/profile_ListPayment'>
             <MenuItem>
                <ListItemIcon>
                  <ShoppingBasketIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Payment</Typography>
              </MenuItem>
             </Link>
            </MenuList>
          </Stack>
         {/* <InfoUser/> */}
         {children}
        </Stack>
      </Container>
    </div>
  );
}
