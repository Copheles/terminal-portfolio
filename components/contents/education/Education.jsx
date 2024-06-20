import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.eduHeader}>BA English in 2019</h3>
      <h3 className={styles.eduHeader}>Other Qualifications:</h3>
      <div className={styles.qulifications}>
        <div className={styles.sideBox}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
        <span className={styles.eduSpan}>
          I have recently taken exam ( NCC level 4 Diploma in Computing).
        </span>
      </div>
      <div className={styles.qulifications}>
        <div className={styles.sideBox}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
        <span  className={styles.eduSpan}>
          I have been pursuing online courses through platforms such as EDX and
          Udemy to develop my skills. I am passionate about staying up-to-date
          with industry best practices and am always seeking new opportunities
          to learn and grow.
        </span>
      </div>
    </div>
  );
};

export default Education;
