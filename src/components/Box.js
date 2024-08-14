import styles from "./Box.module.css";
const Box = (props) => {
  return <div className={styles.box}> {props.text} </div>;
};
export default Box;
