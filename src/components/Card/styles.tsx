import styled from 'styled-components';
import { StyledSpanProps } from './types';

const setCursor = ({ rateLimited }: { rateLimited?: boolean }) => (rateLimited ? 'not-allowed' : 'pointer');

export const StyledImage = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50%;
`;

export const StyledCard = styled.div`
    box-sizing: border-box;
    padding: 15px 0px;
`;

export const StyledBody = styled.div`
    display: inline-block;
    justify-content: space-around;
    align-items: center;
    position: relative;
    cursor: ${setCursor};
    height: inherit;
    width: 100%;
    text-align: center;
`;

export const StyledTitle = styled.h5`
    font-size: 16px;
    margin: 5px;
`;

export const StyledSubtitle = styled.h6`
    font-size: 14px;
    margin: 1px;
`;

export const StyledContainer = styled.div`
    flex: 1;
`;

export const StyledText = styled.p`
    font-size: 14px;
`;

export const StyledSpan = styled.span<StyledSpanProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    padding: 0 5px;
    border: 1px solid white;
    border-radius: 17px;
`;
