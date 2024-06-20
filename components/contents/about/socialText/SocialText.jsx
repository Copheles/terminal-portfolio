/* eslint-disable react/prop-types */
import styles from "./socialText.module.css";

const SocialText = ({ icon, text, icontext, goToLink }) => {
  return (
    <div className={styles.iconContainer}>
      {icon}
      {icontext}
      <a href={goToLink} className={styles.goToText}target="_blank">
        @{text}
      </a>
    </div>
  );
};

export default SocialText;
