interface Props {
  children: string;
  type?: "primary" | "secondary" | "danger" | "success" | "warning";
  className?: string;
  onClick: () => void;
}
const Button = ({ children, type = "primary", onClick, className }: Props) => {
  return (
    <button className={"btn btn-" + type + className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
