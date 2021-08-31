import React, { useEffect, useState } from "react";
import ThumbnailCard from "../components/ThumbnailCard";
import styled from "styled-components";
import axios from "axios";
import { ApiInstance } from "../lib/ApiInstance";

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  height: calc(100vh - 80px);
  overflow: scroll;
`;

const InnerContainer = styled.div`
  margin-top: 40px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function SingListPage() {
  const [sings, setSings] = useState([]);
  const [skip, setSkip] = useState(0);
  const getSings = async () => {
    await axios.get(`${ApiInstance}/singview?skip=${skip}`).then((response) => {
      setSings([...sings, ...response.data]);
    });
  };

  useEffect(() => {
    getSings();
  }, [skip]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop === scrollHeight) {
      setSkip(sings.length);
    }
  };

  return (
    <Container onScroll={handleScroll}>
      <InnerContainer>
        {sings.length > 0 ? (
          sings.map((item) => (
            <ThumbnailCard
              title={item.title.slice(9)}
              key={item._id}
              id={item._id}
              likes={item.likes}
              preview={item.description.slice(0, 60)}
              commentNum={item.comments.length}
              url={item.url}
            />
          ))
        ) : (
          <h1> loading</h1>
        )}
      </InnerContainer>
    </Container>
  );
}

export default SingListPage;
