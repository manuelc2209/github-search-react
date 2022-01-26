import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../..";
import { UserProps } from "../../../api/shared";

export interface childProps {
  name: string;
  id?: string | number;
  company?: string;
  email?: string;
  username?: string;
  avatar_url?: string;
}

const StyledCard = styled(Card)`
  min-height: 150px;
`;

const StyledList = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  flex: 1;

  @media (max-width: 580px) {
    box-sizing: border-box;
    padding: 20px;
    justify-content: center;
  }

  ${StyledCard} {
    border-bottom: 1px solid white;
  }
`;

const StyledColumn = styled.div`
  flex: 1;
  padding: 5px;
  width: 100%;
`;

const StyledLabel = styled.span`
  margin: 25px auto 0 0;
  display: block;
  width: 100%;
  padding: 10px 2px;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  background-color: #c4c4c449;
  border: 1px solid lightgrey;
  color: white;
  height: 40px;
  border-radius: 7px;
  cursor: pointer;

  :hover {
    background-color: #d3d3d31d;
  }
`;

const StyledBody = styled.div`
  width: inherit;
  display: flex;

  @media (min-width: 750px) {
    width: 600px;
  }
`;

const StyledBanner = styled.div`
  min-height: 58px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: #911b1b;
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
`;

export const List: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const users = state as any;

  const customFilterList = showMore ? users : users.slice(0, 4);
  const hasReachedLimit = users.find((user: UserProps) => user.rateLimited);

  useEffect(() => {
    setIsRateLimited(!!hasReachedLimit);
  }, [hasReachedLimit]);

  return (
    <StyledList>
      <StyledBody>
        <StyledColumn>
          {isRateLimited && (
            <StyledBanner>
              The requests are being rate limited, please try again later
            </StyledBanner>
          )}
          <StyledLabel>
            {`Results(${users.length})`}{" "}
            <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
          </StyledLabel>
          {customFilterList &&
            customFilterList.map((user: UserProps, index: number) => (
              <StyledCard
                user={user}
                key={`user-${index}`}
                onClick={(selectedUser) =>
                  !isRateLimited && navigate("/user", { state: selectedUser })
                }
              />
            ))}
        </StyledColumn>
      </StyledBody>
      {!showMore && users.length > 4 && (
        <StyledButton
          data-testid="StyledButton"
          onClick={() => setShowMore(true)}
        >
          Click to show more
        </StyledButton>
      )}
    </StyledList>
  );
};
