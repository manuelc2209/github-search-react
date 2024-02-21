import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserProps } from '../../../api/shared';
import {
    StyledList,
    StyledBody,
    StyledColumn,
    StyledBanner,
    StyledLabel,
    StyledCard,
    StyledButton,
    StyledResultsList
} from './styles';

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
                        {`Results(${users.length})`}{' '}
                        <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
                    </StyledLabel>
                    <StyledResultsList>
                        {customFilterList &&
                            customFilterList.map((user: UserProps, index: number) => (
                                <StyledCard
                                    user={user}
                                    key={`user-${index}`}
                                    onClick={(selectedUser) =>
                                        !isRateLimited && navigate('/user', { state: selectedUser })
                                    }
                                />
                            ))}
                    </StyledResultsList>
                </StyledColumn>
            </StyledBody>
            {!showMore && users.length > 4 && (
                <StyledButton data-testid="StyledButton" onClick={() => setShowMore(true)}>
                    Click to show more
                </StyledButton>
            )}
        </StyledList>
    );
};
