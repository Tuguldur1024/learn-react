import styles from "./Form.module.css";
import Input from "./Input";
import Button from "./Button";

const Subscribe = (props) => {
  return (
    <div className={styles.background}>
      <h2> Subscribe </h2>
      <p> Sign up with your email address to recieve news and updates</p>
      <div className={styles.button_input_container}>
        <div className={styles.input_container}>
          <Input placeholder="First name ..." />
          <Input placeholder="Last name ..." />
          <Input placeholder="Email ..." />
        </div>
        <Button />
      </div>
    </div>
  );
};
export default Subscribe;
