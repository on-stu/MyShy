import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./loginPage.css";
import KaKaoLogin from "react-kakao-login";

function LoginPage({ isLoggedIn }) {
  const history = useHistory();
  const { Kakao } = window;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const responseKaKao = async (res) => {
    console.log("kakao", res);
    await axios
      .post("http://localhost:3001/api/kakaoLogin", res)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          console.log("the token is", res.data.data);
          localStorage.setItem("token", res.data.data);
          history.replace("/");
          history.go(0);
        }
      });
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const LogIn = async () => {
    await axios
      .post("http://localhost:3001/api/login", { username, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          console.log("the token is", res.data.data);
          localStorage.setItem("token", res.data.data);
          history.replace("/");
          history.go(0);
        } else if (res.data.status === "error") {
          alert(res.data.error);
        }
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.replace("/");
    }
    console.log(Kakao);
  }, [isLoggedIn]);

  return (
    <div className="login__Container">
      <div className="login__InnerContainer">
        <div className="login__inputContainer">
          <h2>로그인</h2>
          <div className="login__input">
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              required
              placeholder="아이디"
            />
          </div>
          <div className="login__input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder="비밀번호"
            />
          </div>
          <div className="login__button">
            <Button onClick={LogIn}>로그인</Button>
          </div>
          <div className="login__button">
            <Button onClick={() => history.push("/register")}>회원가입</Button>
          </div>
          <div className="login__social_button">
            <Button
              onClick={() => {
                alert("준비중입니다.");
              }}
            >
              <FontAwesomeIcon icon={faGoogle} />
              &nbsp; 구글로 로그인
            </Button>
            <div className="kakaoLogin">
              <KaKaoLogin
                className="kakaoLogin"
                jskey={"4c29c3d6db416c3bbf28c6c1517a41ac"}
                onSuccess={responseKaKao}
                onFail={() => alert("실패했습니다")}
                getProfile={true}
                style={{
                  width: "100%",
                  height: "100%",
                  background: "none",
                  borderRadius: "10px",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                &nbsp;
              </KaKaoLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
