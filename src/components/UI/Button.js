import classes from "./Button.module.css";

const Button = (props) => {
  const classNames = `${classes.button} ${
    props.className ? props.className : ""
  }`;
  return (
    <button
      className={classNames}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
