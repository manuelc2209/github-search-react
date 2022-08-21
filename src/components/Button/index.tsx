import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  background-color: #ffffffd5;
  border: 1px solid lightgrey;
  font-size: 16px;
  color: #000000;
  height: 40px;
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #d3d3d3e1;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <StyledButton
      data-testid="StyledButton"
      onClick={() => onClick && onClick()}
      className={className}
    >
      {label}
    </StyledButton>
  );
};
