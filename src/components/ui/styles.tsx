import styled from 'styled-components';
import { Button } from '../Button';
import { Input } from '../Input';

export const StyledButton = styled(Button)`
    background-color: #ffffff;
    color: #000000;
    font-weight: 600;
    font-size: 18px;
    width: 18.75rem;
`;

export const LoadingContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledInputContainer = styled.div`
    justify-content: center;
`;

export const StyledInput = styled(Input)``;
