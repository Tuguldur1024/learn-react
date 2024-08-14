import styles from "./Box.module.css";

const Round = (props) => {
  return <div className={styles.round}> {props.text} </div>;
};
export default Round;
