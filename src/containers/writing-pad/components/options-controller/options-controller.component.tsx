import React from "react";
import styled from "styled-components";
import { theme } from "../../../../assets/styles/theme";
import { WORDING } from "../../../../shared/i18n/en.wording";
import { Input } from "../../../../components/input/input.component";

const t = WORDING.WRITING_PAD.OPTIONS_CONTROLLER;

const StyledOptionsController = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  background: ${theme.colors.primary_200};
  box-shadow: 0px 3px 14px 0px ${theme.colors.accent};
  z-index: 1;

  > * {
    margin-right: 0.5rem;
  }
`;

interface OptionsControllerProps {
  dispatcher: React.Dispatch<any>;
}

export const OptionsController: React.FC<OptionsControllerProps> = ({
  dispatcher,
}) => {
  return (
    <StyledOptionsController>
      <Input
        placeholder="Document height"
        type="number"
        onChange={(e) =>
          dispatcher({
            type: "DOCUMENT_HEIGHT",
            value: `${e.target?.value}pt`,
          })
        }
        suffix="px"
      />
      <Input
        placeholder="Document width"
        type="number"
        onChange={(e) =>
          dispatcher({
            type: "DOCUMENT_WIDTH",
            value: `${e.target?.value}pt`,
          })
        }
        suffix="px"
      />
    </StyledOptionsController>
  );
};
