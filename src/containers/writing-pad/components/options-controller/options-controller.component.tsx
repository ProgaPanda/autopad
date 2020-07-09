import React from "react";
import styled from "styled-components";
import { theme } from "../../../../assets/styles/theme";
import { WORDING } from "../../../../shared/i18n/en.wording";
import { Input } from "../../../../components/input/input.component";
import { ColorPicker } from "../color-picker/color-picker";
import { rgbToCmyk } from "../../../../shared/services/helpers";
import { OptionsAction } from "../../writing-pad.service";
import { Select } from "../../../../components/select/select.component";

const t = WORDING.WRITING_PAD.OPTIONS_CONTROLLER;

const StyledOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
  background: #fff;
  box-shadow: 0px 3px 14px 0px ${theme.colors.accent};
  padding: 1rem;
  z-index: 1;
`;

const StyledOption = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const StyledOptionLabel = styled.div`
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
`;

interface OptionsControllerProps {
  dispatcher: React.Dispatch<OptionsAction>;
}

export const OptionsController: React.FC<OptionsControllerProps> = ({
  dispatcher,
}) => {
  return (
    <StyledOptionsContainer>
      <StyledOption>
        <StyledOptionLabel>Font color</StyledOptionLabel>
        <ColorPicker
          initialColor={{ r: 77, g: 77, b: 77 }}
          onColorChange={(color) => {
            dispatcher({
              type: "FONT_COLOR",
              value: rgbToCmyk(color),
            });
          }}
        />
      </StyledOption>

      <StyledOption>
        <StyledOptionLabel>Font size</StyledOptionLabel>
        <Select
          options={[
            { value: 12, label: "Small (12px)" },
            { value: 14, label: "Medium (14px)" },
            { value: 16, label: "Large (16px)" },
            { value: 20, label: "X Large (20px)" },
          ]}
          onChange={(e) => {
            dispatcher({
              type: "FONT_SIZE",
              value: Number(e.value),
            });
          }}
        />
      </StyledOption>

      <StyledOption>
        <StyledOptionLabel>Height</StyledOptionLabel>
        <Input
          placeholder={t.DOCUMENT_HEIGHT}
          initialValue="842"
          type="number"
          onChange={(e) =>
            dispatcher({
              type: "DOCUMENT_HEIGHT",
              value: Number(e.target?.value),
            })
          }
          suffix="px"
        />
      </StyledOption>

      <StyledOption>
        <StyledOptionLabel>Width</StyledOptionLabel>
        <Input
          placeholder={t.DOCUMENT_WIDTH}
          initialValue="595"
          type="number"
          onChange={(e) =>
            dispatcher({
              type: "DOCUMENT_WIDTH",
              value: Number(e.target?.value),
            })
          }
          suffix="px"
        />
      </StyledOption>
    </StyledOptionsContainer>
  );
};
