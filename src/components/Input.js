import styles from "./Form.module.css";
const Input = (props) => {
  return (
    <input placeholder={props.placeholder} className={styles.input}></input>
  );
};
export default Input;
