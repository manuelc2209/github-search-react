import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  value?: string;
  className?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 4px solid #d3d3d3e1;
  background: none;
  color: rgb(255, 255, 255);
  width: 20.5rem;
  margin-bottom: 3.12rem;
  padding-bottom: 0.75rem;
  outline: none;

  ::placeholder {
    color: #c9c9c9;
    font-weight: 600px;
    font-size: 16px;
  }
`;

export const Input: React.FC<InputProps> = ({
  value,
  className,
  onChange,
  onKeyPress,
}) => {
  return (
    <StyledInput
      data-testid="StyledInput"
      value={value}
      placeholder="Search a user or organization"
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(event)
      }
      onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
        value && onKeyPress && onKeyPress(event)
      }
      className={className}
    />
  );
};
