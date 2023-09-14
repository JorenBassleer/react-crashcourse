import { ChangeEvent } from "react";

interface Props {
  value: string;
  size?: "mini" | "small" | "base" | "large";
  type: string;
  placeholder?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, value, size = "base", placeholder, className, onChange }: Props) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
