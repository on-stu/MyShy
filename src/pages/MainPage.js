import React, { useEffect } from "react";
import "./mainPage.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
