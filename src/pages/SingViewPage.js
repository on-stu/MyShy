import "./singViewPage.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { ApiInstance } from "../lib/ApiInstance";

function SingViewPage({ match, isLoggedIn }) {
  const [sing, setSing] = useState([]);
  console.log(isLoggedIn);
  const {
    params: { id },
  } = match;
  const getSingById = async () => {
    await axios.post(`${ApiInstance}/getsingbyid/${id}`).then((response) => {
      console.log(response.data.sing[0]);
      setSing(response.data.sing[0]);
    });
  };

  useEffect(() => {
    getSingById();
  }, []);

  return (
    <>
      <div className="singview__Container">
        <div className="singview__InnerContainer">
          <div className="singview__PlayerContainer">
            <h1>{sing.title}</h1>
            <div className="singview__Player">
              <ReactPlayer
                url={sing.url}
                playing={false}
                loop={true}
                controls={true}
              />
            </div>
            <p>{sing.description}</p>
            <div className="singview__footer">
              <FontAwesomeIcon icon={faHeart} size="2x" />
              <h3>{sing.likes}</h3>
              &nbsp;
              <FontAwesomeIcon icon={faComment} size="2x" />
              <h3>0</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingViewPage;
