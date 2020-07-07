import React, { useState } from "react";
import { CirclePicker } from "react-color";
import styled from "styled-components";

const StyledPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 100%;
  background: #fff;
  border-radius: 5px;

  .circle-picker {
    max-width: fit-content;
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
