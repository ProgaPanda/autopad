import React from "react";
import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../assets/svgs/loading.icon.svg";

import { theme } from "../../assets/styles/theme";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 100%;
  border: 0;
  color: #fff;
  background: ${theme.colors.secondary};

  :hover {
    background: ${theme.colors.secondary_200};

    cursor: ${({ isLoading }: ButtonProps) =>
      isLoading ? "not-allowed" : "pointer"};
  }
  :focus {
    outline-color: ${theme.colors.primary};
  }
  :active {
    transform: translateY(2px);
    outline: 0;
  }
`;

interface ButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  isLoading,
  children,
}) => {
  const handleClick = () => {
    if (!isLoading) {
      onClick();
    }
  };

  return (
    <StyledButton onClick={handleClick}>
      {isLoading ? <LoadingIcon height="40px" /> : children}
    </StyledButton>
  );
};
