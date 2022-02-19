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
  margin: 20px;

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

const Styledh5 = styled.h5`
  font-weight: 500;
`;

const StyledLinkTitle = styled.a`
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

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

const StyledSpan = styled.span`
  font-size: 14px;
  width: 200px;
`;

const StyledTag = styled.span`
  bottom: 0;
  left: 0;
  font-size: 12px;
  padding: 0 5px;
  border: 1px solid white;
  border-radius: 17px;
  align-self: center;
`;

export const UserCard: React.FC = () => {
  const [data, setData] = useState<any | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [rateLimiting, setRateLimiting] = useState<boolean>(true);
  const navigate = useNavigate();
  const { state } = useLocation();
  const user = state as any;

  useEffect(() => {
    if (user && user.repos_url) {
      setLoading(true);
      fetch(user.repos_url)
        .then((response) => response.json())
        .then((data) => {
          if (data.status !== 403) {
            setRateLimiting(false);
            setData(data);
            setLoading(false);
            return;
          }
          setRateLimiting(true);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return rateLimiting || loading ? (
    rateLimiting ? (
      <>
        <div>Rate Limiting reached</div>
        <br />
        <div>Please try again later</div>
      </>
    ) : (
      <div>Loading...</div>
    )
  ) : (
    <StyledContainer>
      <StyledContent>
        <StyledImage src={user.avatar_url} />
        <Styledh5>
          <StyledLinkTitle href={user.html_url} target="_blank">
            {user.login}
          </StyledLinkTitle>
        </Styledh5>
        <StyledTag>{user.type}</StyledTag>
        <br />
        {user && user.company && <span>Company: {user.company}</span>}
        <StyledSpan>{user.bio}</StyledSpan>
        {data && <Styledh5>Repositories: ({data?.length})</Styledh5>}
        {data &&
          data.map((repo: { name: string; html_url: string }) => (
            <React.Fragment key={repo.name}>
              <div>
                <StyledText>
                  Link:
                  <StyledLink href={repo!.html_url!} target="_blank">
                    {repo.name}
                  </StyledLink>
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
