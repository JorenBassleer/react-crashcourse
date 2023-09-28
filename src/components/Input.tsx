import { ChangeEvent, KeyboardEvent } from "react";
import ElementConfig from "../types/ElementConfig";

interface Props extends ElementConfig {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
const Input = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
  ...ElementConfig
}: Props) => {
  // Implement size later
  const { size = 'base', type = 'text', className } = ElementConfig;
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
