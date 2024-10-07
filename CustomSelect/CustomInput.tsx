import React from "react";

const inputStyles = (isHidden: boolean) => ({
  label: "custom-input",
  color: "inherit",
  flex: 1,
  background: "transparent",
  opacity: isHidden ? 0 : 1,
  width: "100%",
  border: "none",
  outline: "none",
  padding: "8px",
  borderRadius: "4px",
  height: "8px",
});

// Define a type that extends input props
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isHidden: boolean;
  isDisabled?: boolean;
  inputref?: React.Ref<HTMLInputElement>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  isHidden,
  isDisabled,
  value,
  onChange,
  onKeyDown,
  placeholder,
  inputref,
  ...props
}) => {
  const styles = inputStyles(isHidden);

  return (
    <input
      type="text"
      style={styles} // Use style prop instead of css
      placeholder={placeholder}
      disabled={isDisabled}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputref}
      {...props}
    />
  );
};

export default CustomInput;
