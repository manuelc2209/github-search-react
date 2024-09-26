import React from 'react';
import { StyledButton } from './styles';

export const Button: React.FC<ButtonProps> = ({ label, className, onClick, testId = 'btn-element' }) => (
    <StyledButton data-testid={testId} onClick={() => onClick && onClick()} className={className}>
        {label}
    </StyledButton>
);
