import React, { useEffect } from "react";
import "./mainPage.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Card from "../components/Card";

function MainPage() {
  return (
    <div className="main__Container">
      <div className="main__InnerContainer">
        <div className="main__SearchContainer">
          <input type="text" placeholder="검색어를 입력하세요" />
          <SearchIcon />
        </div>
        <div className="main__col1">
          <div className="main__col1__header">
            <h3>승호 노래영상</h3>
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
              title="너였다면"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={1}
            />
            <Card
              title="안녕 나의 사랑"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={2}
            />
            <Card
              title="잘가요"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={40}
            />
            <Card
              title="그 사람"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={50}
            />
            <Card
              title="너를 만나"
              preview="진짜 좆되는 라이브"
              commentNum={31}
              likes={60}
            />
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
