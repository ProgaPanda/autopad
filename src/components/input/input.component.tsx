import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../assets/styles/theme";

const StyledInput = styled.input<InputProps>`
  padding: 1rem 1.5rem;
  border: 0;
  background: #fff;
  flex: 1;
  min-width: 100px;
  font-size: 0.8rem;
  border-radius: 5px 0 0 5px;

  :focus {
    outline: 0;
  }

  /* Remove number arrows from input type number */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }

  ${(props: InputProps) => props.disabled && disabledPartial}
`;

const StyledInputContainer = styled.div`
  display: flex;
  min-width: 100px;
  border: 2px solid ${theme.colors.accent};
  border-radius: 5px;

  :focus-within {
    border-color: ${theme.colors.secondary};
  }
`;

const disabledPartial = css`
  background: ${theme.colors.neutral_600};
  :hover {
    cursor: not-allowed;
  }
`;

const StyledPrefix = styled.div`
  padding: 1rem;
  background: #fff;
  font-size: 0.8rem;
  border-radius: 5px 0 0 5px;
`;

const StyledSuffix = styled(StyledPrefix)`
  border-radius: 0 5px 5px 0;
`;

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
