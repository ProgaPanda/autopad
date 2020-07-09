import React, { useState } from "react";
import { CirclePicker } from "react-color";
import styled from "styled-components";
import { theme } from "../../../../assets/styles/theme";

const StyledPickerContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  height: 3rem;
  padding: 0.5rem 0;
  background: #fff;
  border: 2px solid ${theme.colors.accent};
  border-radius: 5px;

  .circle-picker {
    flex: 1;
    justify-content: space-evenly;
  }
`;

type Rgb = {
  r: number;
  g: number;
  b: number;
};

interface ColorPickerProps {
  initialColor?: Rgb;
  onColorChange?: (color: Rgb) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  onColorChange,
  initialColor,
}) => {
  const [currentColor, setCurrentColor] = useState(initialColor!);

  const handleColorChange = (color: { rgb: Rgb }) => {
    setCurrentColor(color.rgb);
    if (onColorChange) {
      onColorChange(color.rgb);
    }
  };
  return (
    <StyledPickerContainer>
      <CirclePicker
        onChangeComplete={handleColorChange}
        color={currentColor}
        colors={["#4D4D4D", "#025da9", "#F44E3B", "#008309"]}
      />
    </StyledPickerContainer>
  );
};
