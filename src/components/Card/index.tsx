import React from "react";
import styled from "styled-components";
import { UserProps } from "../../api/shared";

interface CardProps {
  user: UserProps;
  className?: string;
  onClick?: (user: UserProps) => void;
}

interface StyledSpanProps {
  tag?: string;
}

const setCursor = ({ rateLimited }: { rateLimited?: boolean }) =>
  rateLimited ? "not-allowed" : "pointer";

const StyledImage = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
`;

const StyledCard = styled.div`
  box-sizing: border-box;
  padding: 15px 0px;
`;

const StyledBody = styled.div`
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: ${setCursor};
  height: inherit;
  width: 100%;
  text-align: center;
`;

const StyledTitle = styled.h5`
  font-size: 16px;
  margin: 5px;
`;

const StyledSubtitle = styled.h6`
  font-size: 14px;
  margin: 1px;
`;

const StyledContainer = styled.div`
  flex: 1;
`;

const StyledText = styled.p`
  font-size: 14px;
`;

const StyledSpan = styled.span<StyledSpanProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  padding: 0 5px;
  border: 1px solid white;
  border-radius: 17px;
`;

export const Card: React.FC<CardProps> = ({ user, className, onClick }) => {
  return (
    <div>
      {user && (
        <StyledCard
          className={className}
          onClick={() => onClick && onClick(user?.profileData)}
        >
          <StyledBody rateLimited={user?.rateLimited}>
            {user?.avatar_url && (
              <StyledImage src={user.avatar_url}></StyledImage>
            )}
            <StyledContainer>
              {user?.profileData?.name && (
                <StyledTitle>Name: {user?.profileData?.name}</StyledTitle>
              )}
              {user?.profileData?.email && (
                <StyledSubtitle>
                  User Email: {user?.profileData?.email}
                </StyledSubtitle>
              )}
              {user?.login && <h6>Username: {user.login}</h6>}
              {user?.profileData?.company && (
                <StyledText>Company: {user?.profileData?.company}</StyledText>
              )}
            </StyledContainer>
            <StyledSpan tag={user.type}>{user.type}</StyledSpan>
          </StyledBody>
        </StyledCard>
      )}
    </div>
  );
};
