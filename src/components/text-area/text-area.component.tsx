import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { WORDING } from "../../shared/i18n/en.wording";

const t = WORDING.WRITING_PAD.TEXT_AREA;
const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: 0;
  color: ${theme.colors.primary};
  box-shadow: 0px 3px 14px 0px ${theme.colors.accent};
  resize: none;

  :focus {
    outline: 0;
  }
`;

interface TextAreaProps {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ text, onChange }) => {
  return (
    <StyledTextArea
      name="Writing pad"
      value={text}
      onChange={onChange}
      placeholder={t.PLACEHOLDER}
    />
  );
};
