import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./card.css";

function Card({ title, preview, commentNum, likes }) {
  return (
    <div className="card__Container">
      <div className="card__left">
        <h3>{title}</h3>
        <span>{preview}</span>
      </div>
      <div className="card__right">
        <div>
          <div>
            <FontAwesomeIcon icon={faComment} /> {commentNum}
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} /> {likes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
