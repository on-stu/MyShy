import React, { useEffect, useState } from "react";
import "./mainPage.css";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ApiInstance } from "../lib/ApiInstance";

function MainPage({ userObj, isLoggedIn }) {
  const history = useHistory();
  const [sings, setSings] = useState([]);

  const getSings = async () => {
    await axios.post(`${ApiInstance}/getsings`).then((response) => {
      console.log(response.data.sings);
      setSings(response.data.sings);
    });
  };

  useEffect(() => {
    getSings();
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="main__Container">
      <div className="main__InnerContainer">
        <div className="main__SearchContainer">
          <input type="text" placeholder="검색어를 입력하세요" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="main__col1">
          <div className="main__col1__header">
            <h3>승호 노래영상</h3>
            <button onClick={() => history.push("/singlist")}>더보기</button>
          </div>
          <div className="main__col1__body">
            {sings.slice(0, 6).map((item) => (
              <Card
                title={item.title.slice(9)}
                key={item._id}
                id={item._id}
                likes={item.likes}
                preview={item.description.slice(0, 22)}
                commentNum={item.comments.length}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </div>
        </div>
        <div className="main__col1">
          <div className="main__col1__header">
            <h3>자유 게시판</h3>
            <button>더보기</button>
          </div>
          <div className="main__col1__body">
            <Card
              title="니 곁이라면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={20}
            />
            <Card
              title="니 곁이라면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={21}
            />
            <Card
              title="니 곁이라면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={40}
            />
            <Card
              title="니 곁이라면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={33}
            />
            <Card
              title="니 곁이라면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={10}
            />
            <Card
              title="니 곁이라면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
