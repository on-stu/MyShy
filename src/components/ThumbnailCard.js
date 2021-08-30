import React from "react";
import styled from "styled-components";
import ytThumbnail from "youtube-thumbnail";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 30%;
  height: 300px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  z-index: 1;

  h3 {
    padding: 0;
    margin: 0;
  }
  .header {
    margin-bottom: 20px;
    width: 100%;
  }
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    z-index: 0;
    position: relative;
  }

  span {
    color: #7a7a7a;
  }
`;

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

function ThumbnailCard({ title, preview, commentNum, likes, id, url }) {
  const thumbnail = ytThumbnail(url);

  return (
    <CardContainer>
      <StyledLink to={`/singview/${id}`}>
        <div className="header">
          <h3>{title}</h3>
        </div>
        <img src={thumbnail.high.url} alt={title} />
        <span>{preview}...</span>
      </StyledLink>
    </CardContainer>
  );
}

export default ThumbnailCard;
