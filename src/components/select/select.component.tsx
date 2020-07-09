import React from "react";
import ReactSelect, { Styles } from "react-select";
import { theme } from "../../assets/styles/theme";

const customStyles: Styles = {
  container: (provided) => ({
    ...provided,
    height: "3rem",
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    height: "100%",
    borderWidth: 2,
    borderColor: isFocused ? theme.colors.secondary : theme.colors.accent,
    boxShadow: "none",
    "&:hover": {
      borderColor: isFocused ? theme.colors.secondary : theme.colors.accent,
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "2rem",
    paddingLeft: "calc(1.5rem - 3px)",
  }),
  option: (provided, { isSelected }) => {
    return {
      ...provided,
      backgroundColor: isSelected && theme.colors.primary_200,

      "&:hover": {
        backgroundColor: !isSelected && theme.colors.accent_200,
      },

      "&:active": {
        backgroundColor: isSelected && theme.colors.primary,
      },
    };
  },
};

type SelectOption = {
  label: string;
  value: string | number;
};

interface SelectProps {
  defaultOption?: SelectOption;
  options: Array<SelectOption>;
  onChange: (changedValue: SelectOption) => void;
}

export const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  defaultOption = options[0],
}) => {
  return (
    <ReactSelect
      options={options}
      defaultValue={defaultOption}
      styles={customStyles}
      onChange={(value) => onChange(value as SelectOption)}
    ></ReactSelect>
  );
};
