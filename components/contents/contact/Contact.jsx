import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>Phone</p>
        <a href="tel:959760398142" className={styles.value}>
          +959760398142
        </a>
      </div>
      <div className={styles.box}>
        <p className={styles.text}>Email</p>
        <a href="mailto:copheles98@gmail.com" className={styles.value}>
          copheles98@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
