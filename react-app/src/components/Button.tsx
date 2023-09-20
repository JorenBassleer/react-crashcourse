import ElementConfig from "../types/ElementConfig";

interface ButtonProps extends ElementConfig {
  children: string;
  onClick: () => void;
  icon?: React.ReactNode;
}
const Button = ({ children, type = "primary", onClick, className, icon, size = 'base', ...elementConfig }: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + type + " " + className}
      onClick={onClick}
      
    >
      {children}
      {icon}
    </button>
  );
};
export default Button;
