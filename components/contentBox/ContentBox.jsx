/* eslint-disable react/prop-types */
import styles from "./contentBox.module.css";

const ContentBox = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContentBox;
