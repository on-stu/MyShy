import { faCheckCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Comment = styled.div`
  width: 90%;
  background-color: white;
  min-width: 900px;
  margin-top: 25px;

  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .user {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
  p {
    font-size: 20px;
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
`;

function Comments({ nickname, content }) {
  return (
    <Comment>
      <div className="user">
        <FontAwesomeIcon icon={faUser} />
        <h3>{nickname}</h3>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </Comment>
  );
}

export default Comments;
