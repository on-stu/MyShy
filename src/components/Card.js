import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./card.css";

const StyledLink = styled(Link)`
  text-emphasis: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: black;

  h3 {
    padding: 0;
    margin: 0;
  }
`;

function Card({ title, preview, commentNum, likes, id }) {
  console.log(id);
  return (
    <div className="card__Container">
      <div className="card__left">
        <StyledLink to={`/singview/${id}`}>
          <h3>{title}</h3>
        </StyledLink>
        <span>{preview}...</span>
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
