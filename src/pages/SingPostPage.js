import React, { useState } from "react";
import "./singPostPage.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  row-gap: 15px;
`;

const UploadButton = styled(Button)`
  width: 600px;
  height: 40px;
  background-color: #537fa8;
  color: white;

  :hover {
    background-color: #537fa8;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55px;
  }
`;

function SingPostPage({ userObj }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const onSingUpload = async () => {
    const req = {
      title,
      description,
      url,
      creatorId: userObj.user.id,
      createdAt: Date.now(),
    };
    await axios.post("http://localhost:3001/api/singpost", req).then((res) => {
      const { data: status } = res;
      console.log(res.data.status);
      if (status === "success") {
        alert("업로드에 성공했습니다!");
        setTitle("");
        setDescription("");
        setUrl("");
      } else {
        console.log("error");
      }
    });
  };

  return (
    <Container>
      <div className="main__SearchContainer">
        <input
          type="text"
          value={title}
          required
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력하세요."
        />
      </div>
      <div className="main__SearchContainer">
        <input
          type="text"
          value={description}
          required
          onChange={(event) => setDescription(event.target.value)}
          placeholder="설명"
        />
      </div>
      <div className="main__SearchContainer">
        <input
          type="text"
          value={url}
          required
          onChange={(event) => setUrl(event.target.value)}
          placeholder="영상 URL"
        />
      </div>
      <UploadButton onClick={onSingUpload}>
        <div>
          <FontAwesomeIcon icon={faFileUpload} />
          <span>업로드</span>
        </div>
      </UploadButton>
    </Container>
  );
}

export default SingPostPage;
