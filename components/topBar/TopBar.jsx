import styles from "./topBar.module.css";
import { RiRobot2Line } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dotBox}>
        <div className={styles.dotRed}></div>
        <div className={styles.dotYellow}></div>
        <div className={styles.dotGreen}></div>
      </div>

      <div className={styles.nameBox}>
        <RiRobot2Line size={20} className={styles.glow} />
        <p className={styles.nameText}> Copheles/terminal_portfolio</p>
      </div>
    </div>
  );
};

export default TopBar;
