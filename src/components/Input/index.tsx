import React, { ChangeEvent } from 'react';
import { StyledInput } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ value, className, onChange, onKeyDown }) => {
    return (
        <StyledInput
            data-testid="StyledInput"
            value={value}
            placeholder="Search a user or organization"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event)}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                value && onKeyDown && onKeyDown(event)
            }
            className={className}
        />
    );
};
