import styles from "./terminalBox.module.css";
import TopBar from "../topBar/TopBar";
import TerminalMainBox from "../TerminalMainBox/TerminalMainBox";

const TerminalBox = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <TerminalMainBox />
    </div>
  );
};

export default TerminalBox;
