interface Props {
  children: string;
  type?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  onClick: () => void;
}
const Button = ({ children, type = 'primary', onClick }: Props) => {
  return <button className={"btn btn-" + type} onClick={onClick}>{children}</button>;
};
export default Button;
