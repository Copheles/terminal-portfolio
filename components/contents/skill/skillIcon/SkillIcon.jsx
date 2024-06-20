/* eslint-disable react/prop-types */
import styles from "./skillIcon.module.css";

const SkillIcon = ({ icon, text, color}) => {
  return (
    <div className={styles.container} style={{ color: color}}>
      {icon}
      {text}
    </div>
  );
};

export default SkillIcon;
