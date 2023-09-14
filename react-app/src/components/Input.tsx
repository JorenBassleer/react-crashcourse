import { ChangeEvent, KeyboardEvent } from "react";

interface Props {
  value: string;
  size?: "mini" | "small" | "base" | "large";
  type: string;
  placeholder?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
const Input = ({ type, value, size = "base", placeholder, className, onChange, onKeyDown }: Props) => {
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
