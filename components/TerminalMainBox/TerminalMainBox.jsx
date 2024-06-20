"use client"

import { useState } from "react";
import MainContent from "../mainContent/MainContent";
import styles from "./terminalMainBox.module.css";
import TextSideBar from "../textSidebar/TextSideBar";
import getCurrentTimeFormatted from "../../utils/getCurrentFormatted";

const TerminalMainBox = () => {
  const [items, setItems] = useState([
    { text: "welcome", currentTime: getCurrentTimeFormatted() },
  ]);

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <MainContent key={index} item={item} />
      ))}
      <TextSideBar items={items} setItems={setItems} />
    </div>
  );
};

export default TerminalMainBox;
