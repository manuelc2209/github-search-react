import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Button";

const StyledContainer = styled.div`
  min-height: 500px;
  width: 300px;
  border: 1px solid white;
  padding: 50px;
  box-sizing: border-box;
  position: relative;
  text-align: center;

  @media (min-width: 580px) {
    width: 350px;
  }

  @media (min-width: 720px) {
    width: 400px;
  }

  @media (min-width: 1000px) {
    width: 750px;
  }
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const StyledContent = styled.div``;

const Styledh5 = styled.h5``;

const StyledText = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const StyledLink = styled.a`
  font-size: 16px;
  color: white;
  padding-left: 20px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const UserCard: React.FC = () => {
  const [data, setData] = useState<any | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { state } = useLocation();
  const user = state as any;

  useEffect(() => {
    if (user && user.repos_url) {
      fetch(user!.repos_url!)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          // Implement Error Logic
        })
        .catch((err) => {
          // Implement Error Logic
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <StyledContainer>
      <StyledContent>
        <StyledImage src={user.avatar_url} />
        <Styledh5>{user.login}</Styledh5>
        <br />
        <Styledh5>Number of repositories: ({data.length})</Styledh5>
        {data.map((repo: { name: string; html_url: string }) => (
          <React.Fragment key={repo.name}>
            <div>
              <StyledText>
                Link:
                <StyledLink href={repo!.html_url!}>{repo.name}</StyledLink>
              </StyledText>
            </div>
            <br />
          </React.Fragment>
        ))}
      </StyledContent>
      <StyledButton label="Back" onClick={() => navigate(-1)} />
    </StyledContainer>
  );
};
