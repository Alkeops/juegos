const Button = ({ onClick, children, leftIcon, rightIcon }) => (
  <button className="banner__button" onClick={onClick}>
   {leftIcon} {children} {rightIcon}
  </button>
);
export default Button;
