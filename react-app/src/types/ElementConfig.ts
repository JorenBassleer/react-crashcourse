export default interface ElementConfig {
  type?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "mini" | "small" | "base" | "large";
  className?: string;
}