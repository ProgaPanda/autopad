import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../assets/styles/theme";

const disabledPartial = css`
  background: ${theme.colors.neutral_600};
  :hover {
    cursor: not-allowed;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  min-width: 100px;
`;

const StyledInput = styled.input<InputProps>`
  padding: 1rem 1.5rem;
  border: 0;
  background: #fff;
  min-width: 100px;
  font-size: 0.8rem;

  ${(props: InputProps) => props.disabled && disabledPartial}

  :focus {
    outline-color: ${theme.colors.secondary};
  }
`;

const StyledPrefix = styled.div`
  padding: 1rem;
  background: #fff;
  font-size: 0.8rem;
`;

const StyledSuffix = StyledPrefix;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
}

export const Input: React.FC<InputProps> = ({
  initialValue,
  onChange,
  disabled,
  prefix,
  suffix,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event);
    }
  };

  return (
    <StyledInputContainer>
      {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
      <StyledInput
        onChange={handleChange}
        defaultValue={String(initialValue)}
        disabled={disabled}
        prefix={prefix}
        suffix={suffix}
        {...props}
      ></StyledInput>
      {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
    </StyledInputContainer>
  );
};
