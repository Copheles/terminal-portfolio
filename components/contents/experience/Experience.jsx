import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.qulifications}>
        <div className={styles.sideBox}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
        <span className={styles.expSpan}>
          6 months intership at OMSProvider company.(As React Native developer).
        </span>
      </div>
      <div className={styles.qulifications}>
        <div className={styles.sideBox}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
        <span className={styles.expSpan}>
          Collaborated on two enterprise freelance projects for short
          periods.(As MERN-stack developer).
        </span>
      </div>
    </div>
  );
};

export default Experience;
