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
  fetchRegisterRequest,
} from "../redux/login/Actions";
import * as TYPES from "../redux/login/Types";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

export default function Login() {
  const [display, setDisplay] = useState(false);
  const [reRender, setReRender] = useState(false);
  const users = useSelector((state) => state.user.textLogin);
  const user = useSelector((state) => state.user.user);
  const loginSuccess = useSelector((state) => state.user.loginSuccess);
  const statusLogin = useSelector((state) => state.user.statusLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthUserRequest());
    function start() {
      gapi.client.init({
        clientId:
          "102456725904-0gb4rrpp4337idg21co7gar7a72mk5ll.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  useEffect(() => {
    if (statusLogin) {
      navigate("/product");
      localStorage.setItem("user", JSON.stringify(loginSuccess));
    }
  }, [reRender]);
  const navigate = useNavigate();
  const clickLogin = async (e) => {
    e.preventDefault();
    await dispatch(fetchCheckLogin(users));
    dispatch(fectchLogin(users));
    setDisplay(true);
    setReRender(!reRender);
  };
  const responseFacebook = async (response) => {
    const newUser = {
      username: response.id,
      password: response.id,
      listCarts: [],
    };
    const flag = user.findIndex((e) => e.username === newUser.username);
    if (flag === -1) {
      // CHƯA CÓ TÀI KHOẢN
      loginWithRegister(newUser);
    } else {
      loginWithoutRegister(newUser);
    }
  };
  const responseGoogle = async (response) => {
    const newUser = {
      username: response.profileObj.email,
      password: response.profileObj.googleId,
      listCarts: [],
    };
    const flag = user.findIndex((e) => e.username === newUser.username);
    if (flag === -1) {
      loginWithRegister(newUser);
    } else {
      loginWithoutRegister(newUser);
    }
  };

  const loginWithRegister = async (data) => {
    await dispatch(fetchRegisterRequest(data));
    dispatch(fetchCheckLogin(data));
    dispatch(fectchLogin(data));
    setReRender(!reRender);
  };
  const loginWithoutRegister = (data) => {
    dispatch(fetchCheckLogin(data));
    dispatch(fectchLogin(data));
    setReRender(!reRender);
  };
  return (
    <Container sx={{ width: "30%" }}>
      <form onSubmit={clickLogin}>
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
            autoComplete="on"
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
            autoComplete="on"
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

          <Button fullWidth type="submit" variant="contained">
            Login
          </Button>
          <div style={{ width: "80%", boxShadow: "0 0 2px 1px #C4C4C4" }}></div>
          <Link to="/product/register">
            <Button fullWidth color="success" variant="contained">
              Register
            </Button>
          </Link>
          <FacebookLogin
            appId="3267114616941933"
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
          />
          <GoogleLogin
            clientId="102456725904-0gb4rrpp4337idg21co7gar7a72mk5ll.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Stack>
      </form>
    </Container>
  );
}
