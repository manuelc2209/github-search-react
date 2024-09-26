import React from 'react';
import {
    StyledBody,
    StyledCard,
    StyledContainer,
    StyledImage,
    StyledSpan,
    StyledSubtitle,
    StyledText,
    StyledTitle
} from './styles';
import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({ user, className, onClick }) => {
    return (
        <div>
            {user && (
                <StyledCard className={className} onClick={() => onClick && onClick(user?.profileData)}>
                    <StyledBody rateLimited={user?.rateLimited}>
                        {user?.avatar_url && <StyledImage src={user.avatar_url}></StyledImage>}
                        <StyledContainer>
                            {user?.profileData?.name && (
                                <StyledTitle>Name: {user?.profileData?.name}</StyledTitle>
                            )}
                            {user?.profileData?.email && (
                                <StyledSubtitle>User Email: {user?.profileData?.email}</StyledSubtitle>
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
