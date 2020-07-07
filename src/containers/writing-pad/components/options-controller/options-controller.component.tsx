import React from "react";
import styled from "styled-components";
import { theme } from "../../../../assets/styles/theme";
import { WORDING } from "../../../../shared/i18n/en.wording";
import { Input } from "../../../../components/input/input.component";
import { ColorPicker } from "../color-picker/color-picker";
import { rgbToCmyk } from "../../../../shared/services/helpers";

const t = WORDING.WRITING_PAD.OPTIONS_CONTROLLER;

const StyledOptionsController = styled.div`
  display: flex;
  align-items: center;
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
        placeholder={t.DOCUMENT_HEIGHT}
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
        placeholder={t.DOCUMENT_WIDTH}
        type="number"
        onChange={(e) =>
          dispatcher({
            type: "DOCUMENT_WIDTH",
            value: `${e.target?.value}pt`,
          })
        }
        suffix="px"
      />
      <ColorPicker
        initialColor={{ r: 77, g: 77, b: 77 }}
        onColorChange={(color) => {
          dispatcher({
            type: "FONT_COLOR",
            value: rgbToCmyk(color),
          });
        }}
      />
    </StyledOptionsController>
  );
};
