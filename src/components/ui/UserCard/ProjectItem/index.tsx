import React from 'react';
import { ProjectItemProps } from './types';

import { StyledLink, StyledProjectContainer, StyledText, StyledTopics } from './styles';
import { nanoid } from 'nanoid';

export const ProjectItem: React.FC<ProjectItemProps> = ({ repo }) => {
    return (
        <StyledProjectContainer>
            <StyledText>
                <StyledLink href={repo!.html_url!} target="_blank">
                    {repo.name}
                </StyledLink>
                <br />
                Topics:
                {repo.topics &&
                    repo.topics.map((entry) => <StyledTopics key={nanoid()}>{entry}</StyledTopics>)}
                {repo.topics.length === 0 && <StyledTopics>N/A</StyledTopics>}
            </StyledText>
            <br />
        </StyledProjectContainer>
    );
};
