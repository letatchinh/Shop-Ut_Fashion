import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  calTotalBill,
  featchDecreaseItemRequest,
  featchIncreaseItemRequest,
  featchRemoveItemCartRequest,
  fecthUserRequest,
  fetchLogginSuccessRequest,
} from "../redux/login/Actions";
import { Stack } from "@mui/system";
import styled from "styled-components";
const SpanStylePrice = styled.span`
margin : 0 10px;
font-family: Montserrat, sans-serif;
font-weight : 500;
font-size : 18px
`
 function Cart({ display }) {
  const dispatch = useDispatch();
  const cartUser = useSelector((state) => state.user.loginSuccess.listCarts);
  const totalBill = useSelector((state) => state.user.totalBill);
  // console.log(totalBill);
  const fetch = useCallback(() => {
    if (localStorage.getItem("user")) {
      dispatch(fetchLogginSuccessRequest());
      
    }
    dispatch(calTotalBill(cartUser))
    console.log("RERENDER CART");
  }, [localStorage.getItem("user")]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  const handleDeleteCart = (item) => {
    dispatch(featchRemoveItemCartRequest(item));
  };
  const handleIncrease = (item) => {
    dispatch(featchIncreaseItemRequest(item));
  };
  const handleDecrease = (item) => {
    dispatch(featchDecreaseItemRequest(item));
  };

  return (
    <List
      sx={{
        display: display ? "block" : "none",
        bgcolor: "background.paper",
        position: "absolute",
        zIndex: 1,
        width: "450px",
        background: "aliceblue",
        top: "100%",
        right: "100%",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      {cartUser?.length === 0 && <span>Empty</span>}
      {cartUser?.map((value) => (
        <ListItem
          sx={{ justifyContent: "space-around" , borderBottom : "2px solid #C4C4C4"}}
          key={v4()}
          disableGutters
          secondaryAction={
            <IconButton
              onClick={() => handleDeleteCart(value)}
              aria-label="comment"
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Avatar
            sx={{ width: "100px", height: "100px" }}
            alt="Remy Sharp"
            src={value.image}
          />
          <Stack width="50%">
            <span
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              {value.name}
            </span>
            <Stack direction="row" alignItems="center">
              <Button
                sx={{ padding: 0, minWidth: "40px" }}
                disabled={value.quanlity === 0}
                onClick={() => handleDecrease(value)}
                variant="outlined"
              >
                -
              </Button>
              <span style={{ margin: "0 10px" }}>{value.quanlity}</span>
              <Button
                sx={{ padding: 0, minWidth: "40px" }}
                onClick={() => handleIncrease(value)}
                variant="outlined"
              >
                +
              </Button>
            </Stack>
            <SpanStylePrice>
              {value.price * value.quanlity} Đ{" "}
            </SpanStylePrice>
            <SpanStylePrice
              style={{
                textDecoration: "line-through",
                fontSize: "12px",
                color: "#C4C4C4",
                display : (value.isSell) ? "block" : "none"
              }}
            >
              {value.price * value.quanlity} Đ
            </SpanStylePrice>
          </Stack>
        </ListItem>
      ))}
      <Stack direction="row" justifyContent="space-between" sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 , margin : "20px 0" }}>
        <span>Tổng Hoá Đơn</span>
        <span style={{fontWeight : 700}}>{totalBill} Đ</span>
      </Stack>
      <Button fullWidth color="success" variant="outlined">Thanh Toán</Button>

    </List>
  );
}
export default Cart