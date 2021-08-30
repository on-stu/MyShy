import "./registerPage.css";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ApiInstance } from "../lib/ApiInstance";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      setNickname(value);
    }
  };

  const Register = async () => {
    await axios
      .post(`${ApiInstance}/register`, {
        username,
        password,
        nickname,
      })
      .then((res) => {
        if (res.data.status === "success") {
          alert("회원가입에 성공했습니다. 로그인 해주세요.");
          history.push("/");
        } else if (res.data.status === "error") {
          alert(res.data.error);
        }
      });
  };

  return (
    <div className="register__Container">
      <div className="register__InnerContainer">
        <div className="register__inputContainer">
          <h2>회원가입</h2>
          <div className="register__input">
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              required
              placeholder="아이디"
            />
          </div>
          <div className="register__input">
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={onChange}
              placeholder="비밀번호"
            />
          </div>
          <div className="register__input">
            <input
              type="text"
              name="nickname"
              value={nickname}
              required
              onChange={onChange}
              placeholder="닉네임"
            />
          </div>
          <div className="register__button">
            <Button onClick={Register}>회원가입</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
