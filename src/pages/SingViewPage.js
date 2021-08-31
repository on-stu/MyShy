import "./singViewPage.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { ApiInstance } from "../lib/ApiInstance";
import { useSelector } from "react-redux";
import Comments from "../components/Comments";
import CommentInput from "../components/CommentInput";

function SingViewPage({ match }) {
  const [sing, setSing] = useState([]);
  const [comments, setComments] = useState([]);

  const userObj = useSelector((state) => state);

  const {
    params: { id },
  } = match;

  const getSingById = async () => {
    await axios.post(`${ApiInstance}/getsingbyid/${id}`).then((response) => {
      console.log(response.data.sing[0]);
      setSing(response.data.sing[0]);
      setComments(response.data.sing[0].comments);
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
              <h3>{comments ? comments.length : 0}</h3>
            </div>
          </div>
          {userObj ? (
            <CommentInput singId={id} userObj={userObj.userObj} />
          ) : (
            ""
          )}
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Comments
                key={comment.createdAt}
                nickname={comment.creatorNickname}
                content={comment.comment}
              />
            ))
          ) : (
            <h4>아직 댓글이 없습니다!</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default SingViewPage;
