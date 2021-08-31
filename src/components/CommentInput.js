import { faCheckCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ApiInstance } from "../lib/ApiInstance";

const Comment = styled.div`
  width: 90%;
  background-color: white;
  min-width: 900px;
  margin-top: 50px;

  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  .user {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
  textarea {
    width: 100%;
    font-size: 20px;
    outline: none;
    border: none;
    resize: none;
  }
  h3 {
    margin: 0;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  span {
    color: #537fa8;
  }
  span:hover {
    cursor: pointer;
  }
`;

function CommentInput({ singId, userObj }) {
  const [text, setText] = useState("");
  const history = useHistory();

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async () => {
    const req = {
      creatorId: userObj._id,
      creatorNickname: userObj.nickname,
      singId,
      comment: text,
      createdAt: Date.now(),
    };
    await axios
      .post(`${ApiInstance}/postcomment`, req)
      .then((res) => {
        const { data: status } = res;
        console.log(res);
        if (status === "success") {
          console.log(res);
        } else {
          console.log("error");
        }
      })
      .then(() => {
        history.go(0);
      });
    setText("");
  };

  return (
    <Comment>
      <div className="user">
        <FontAwesomeIcon icon={faUser} />
        <h3>{userObj.nickname}</h3>
      </div>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="댓글을 달아주세요 시발 ㅋ"
        />
      </div>
      <div className="footer">
        <span>
          <FontAwesomeIcon onClick={onSubmit} icon={faCheckCircle} size="2x" />
        </span>
      </div>
    </Comment>
  );
}

export default CommentInput;
