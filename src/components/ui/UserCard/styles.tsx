import styled from 'styled-components';
import { Button } from '../../Button';

export const StyledContainer = styled.div`
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

    @media (min-width: 820px) {
        width: 800px;
    }

    @media (min-width: 1000px) {
        width: 1000px;
    }
`;

export const StyledImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`;

export const StyledContent = styled.div``;

export const Styledh5 = styled.h5`
    font-weight: 500;
`;

export const StyledLinkTitle = styled.a`
    font-size: 24px;
    font-weight: 600;
    color: #d9eef3;
`;

export const StyledButton = styled(Button)`
    position: absolute;
    top: 25px;
    right: 25px;
`;

export const StyledSpan = styled.span`
    font-size: 14px;
    width: 200px;
`;

export const StyledProfile = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const StyledRepositories = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    font-size: 14px;
`;

export const StyledSubInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledSubSpan = styled.span`
    font-size: 14px;
`;

export const StyledProject = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
`;
