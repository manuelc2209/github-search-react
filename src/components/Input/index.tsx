import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  value?: string;
  className?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 7px;
  padding: 0 20px;
`;

export const Input: React.FC<InputProps> = ({
  value,
  className,
  onChange,
  onKeyPress,
}) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};
