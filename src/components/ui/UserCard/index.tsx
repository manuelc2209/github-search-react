import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserData } from "../../../api/User";
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
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  font-size: 16px;
  color: orange;
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

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
`;

const StyledRepositories = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  font-size: 14px;
`;

const StyledSubInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSubSpan = styled.span`
  font-size: 14px;
`;

const StyledProject = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledProjectContainer = styled.div`
  width: 260px;
  text-align: center;
  background: #1d1d1d;
`;

const StyledTopics = styled.div`
  font-size: 12px;
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
      getUserData(undefined, user.repos_url)
        .then((response) => response)
        .then(async (resp) => {
          if (resp && resp.status !== 403) {
            setRateLimiting(false);
            setData(await resp.data);
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
    rateLimiting && !loading ? (
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
        <StyledProfile>
          <StyledImage src={user.avatar_url} />
          <Styledh5>
            <div>{user.name}</div>
            <StyledLinkTitle href={user.html_url} target="_blank">
              @{user.login}
            </StyledLinkTitle>
            <StyledSubInfo>
              {user && user.location && (
                <StyledSubSpan>Location: {user.location}</StyledSubSpan>
              )}
              {user && (
                <StyledSubSpan>
                  Organization: {user.organization || "none"}
                </StyledSubSpan>
              )}
            </StyledSubInfo>
          </Styledh5>
          <StyledRepositories>
            <div>Total Repositories:</div>
            <div>({data.length})</div>
          </StyledRepositories>
        </StyledProfile>
        {user && user.company && <span>Company: {user.company}</span>}
        <br />
        <StyledSpan>{user.bio}</StyledSpan>
        {data && data.length && (
          <Styledh5>Repositories: ({data.length})</Styledh5>
        )}
        <StyledProject>
          {data &&
            data.map(
              (repo: { name: string; html_url: string; topics: string[] }) => (
                <StyledProjectContainer key={repo.name}>
                  <div>
                    <StyledText>
                      <StyledLink href={repo!.html_url!} target="_blank">
                        {repo.name}
                      </StyledLink>
                      <br />
                      Topics:
                      {repo.topics &&
                        repo.topics.map((entry) => (
                          <StyledTopics>{entry}</StyledTopics>
                        ))}
                      {repo.topics.length === 0 && (
                        <StyledTopics>N/A</StyledTopics>
                      )}
                    </StyledText>
                  </div>
                  <br />
                </StyledProjectContainer>
              )
            )}
        </StyledProject>
      </StyledContent>
      <StyledButton label="Back" onClick={() => navigate(-1)} />
    </StyledContainer>
  );
};
