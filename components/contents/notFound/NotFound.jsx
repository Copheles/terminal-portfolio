import styles from "./notFound.module.css";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.notFound}>
        Command not found !
      </h3>
      <p className={styles.text}>Try: ls</p>
    </div>
  );
};

export default NotFound;
