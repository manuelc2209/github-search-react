import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData } from '../../../api/User';
import {
    StyledContainer,
    StyledContent,
    StyledProfile,
    StyledImage,
    Styledh5,
    StyledLinkTitle,
    StyledSubInfo,
    StyledSubSpan,
    StyledRepositories,
    StyledSpan,
    StyledProject,
    StyledButton
} from './styles';
import { ProjectItem } from './ProjectItem';
import { nanoid } from 'nanoid';

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
                                <StyledSubSpan>Organization: {user.organization || 'none'}</StyledSubSpan>
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
                {data && data.length && <Styledh5>Repositories: ({data.length})</Styledh5>}
                <StyledProject>
                    {data &&
                        data.map((repo: { name: string; html_url: string; topics: string[] }) => (
                            <ProjectItem repo={repo} key={nanoid()} />
                        ))}
                </StyledProject>
            </StyledContent>
            <StyledButton label="Back" onClick={() => navigate(-1)} />
        </StyledContainer>
    );
};
