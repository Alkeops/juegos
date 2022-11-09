const Button = ({ onClick, label, children, disabled }) => (
  <button className="banner__button" onClick={onClick} disabled={disabled}>
  {label || children} 
  </button>
);
export default Button;
