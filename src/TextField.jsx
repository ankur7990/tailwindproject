export default function TextField({
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input-pill ${className}`}
      {...props}
    />
  );
}
