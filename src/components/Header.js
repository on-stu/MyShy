import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./header.css";

function Header({ isLoggedIn, userObj }) {
  const history = useHistory();
  return (
    <div className="header__Container">
      {isLoggedIn ? (
        <div className="header__InnerContainer">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <h1>MyShy</h1>
          </Link>
          <div className="header__LinkContainer">
            <Link style={{ textDecoration: "none", color: "white" }} to="/post">
              <Button>글쓰기</Button>
            </Link>
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/");
                history.go(0);
              }}
            >
              로그아웃
            </Button>
          </div>
        </div>
      ) : (
        <div className="header__InnerContainer">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <h1>MyShy</h1>
          </Link>
          <div className="header__LinkContainer">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/register"
            >
              <Button>회원가입</Button>
            </Link>
            <Link className="link" to="/login">
              <Button>로그인</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
