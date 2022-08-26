import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeText,
  fectchLogin,
  fecthUserRequest,
  fetchCheckLogin,
} from "../redux/login/Actions";
import * as TYPES from "../redux/login/Types";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [display, setDisplay] = useState(false);
  const users = useSelector((state) => state.user.textLogin);
  const statusLogin = useSelector((state) => state.user.statusLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthUserRequest());
  }, [dispatch]);
  useEffect(() => {
    if(statusLogin){
      navigate('/product')
      localStorage.setItem('user',JSON.stringify(users))
    }
  },[statusLogin])
const navigate = useNavigate();
  const clickAddProduct = async (e) => {
    e.preventDefault();
    await dispatch(fetchCheckLogin(users));
    dispatch(fectchLogin(users));
    setDisplay(true);
  };

  return (
    <Container sx={{ width: "30%" }}>
      <form onSubmit={clickAddProduct}>
        <Stack alignItems={"center"} spacing={2}>
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <TextField
            value={users.username}
            onChange={(e) =>
              dispatch(changeText(TYPES.CHANGE_USERNAME, e.target.value))
            }
            fullWidth
            id="outlined-basic"
            label="User Name"
            variant="outlined"
          />
          <TextField
            value={users.password}
            onChange={(e) =>
              dispatch(changeText(TYPES.CHANGE_PASSWORD, e.target.value))
            }
            type={"password"}
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <div style={{ display: display ? " block" : "none" }}>
            <h3
              style={{ color: "red", display: !statusLogin ? "block" : "none" }}
            >
              Login Failed !
            </h3>
            <h3
              style={{
                color: "green",
                display: statusLogin ? "block" : "none",
              }}
            >
              Login SusscessFul !
            </h3>
          </div>
          <ButtonGroup>
            <Button type="submit" variant="contained">
              Login
            </Button>
            <Button type="reset" variant="outlined" color="error">
              Reset
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  );
}
