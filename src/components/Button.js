import styles from "./Form.module.css";

const Button = () => {
  function clickHandle() {
    alert("You subscribed");
  }
  return (
    <button onClick={clickHandle} className={styles.button}>
      {" "}
      Subscribe{" "}
    </button>
  );
};

export default Button;
