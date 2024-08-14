import styles from "./Form.module.css";
import { useState } from "react";
const Input = (props) => {
  const [name, setName] = useState("");
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder={props.placeholder}
      className={styles.input}
    ></input>
  );
};
export default Input;
