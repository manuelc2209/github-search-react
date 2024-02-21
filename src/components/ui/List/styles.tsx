import styled from 'styled-components';
import { Card } from '../../Card';

export const StyledCard = styled(Card)`
    min-height: 150px;
`;

export const StyledList = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    background-color: #232324;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #ffffff;
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

export const StyledColumn = styled.div`
    flex: 1;
    padding: 5px;
    width: 100%;
    height: 100%;
`;

export const StyledLabel = styled.span`
    margin: 25px auto 0 0;
    display: block;
    width: 100%;
    padding: 10px 2px;
    border-bottom: 3px solid black;
    display: flex;
    justify-content: space-between;
`;

export const StyledButton = styled.button`
    background-color: #ffffff;
    border: 1px solid lightgrey;
    color: #000000;
    font-weight: 600;
    font-size: 16px;
    height: 40px;
    border-radius: 7px;
    cursor: pointer;

    :hover {
        background-color: #d3d3d31d;
    }
`;

export const StyledBody = styled.div`
    width: inherit;
    display: flex;

    @media (min-width: 750px) {
        width: 600px;
    }
`;

export const StyledBanner = styled.div`
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
`;

export const StyledResultsList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 75%;

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
`;
