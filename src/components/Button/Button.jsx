const Button = ({ onClick, children, leftIcon, rightIcon, disabled }) => (
  <button className="banner__button" onClick={onClick} disabled={disabled}>
   {leftIcon} {children} {rightIcon}
  </button>
);
export default Button;
