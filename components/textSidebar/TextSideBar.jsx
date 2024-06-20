/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import styles from "./textSideBar.module.css";
import getCurrentTimeFormatted from "../../utils/getCurrentFormatted";

const TextSideBar = ({ items, setItems }) => {
  const [text, setText] = useState("");

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") return;
    if (text.toLowerCase() === "clear") {
      setItems([{ text: "welcome", currentTime: getCurrentTimeFormatted() }]);
    } else {
      setItems([...items, { text, currentTime: getCurrentTimeFormatted() }]);
    }

    setText("");
  };

  const handleDocumentClick = (event) => {
    // Check if the click target is outside of the input element
    if (ref.current && !ref.current.contains(event.target)) {
      // If clicked outside, refocus on the input field
      ref.current.focus();
    }
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    ref.current.focus();
  }, [items, ref]);

  useEffect(() => {
    // Add event listener to handle clicks on the document
    document.addEventListener("click", handleDocumentClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.sideBox} onSubmit={handleSubmit}>
        <label className={styles.sideText}>
          copheles@porfolio<span className={styles.first}>:</span>
          <span className={styles.second}>$</span>
        </label>
        <input
          type="text"
          placeholder="type ls, or something"
          className={styles.input}
          value={text}
          ref={ref}
          onChange={(e) => setText(e.target.value.trim())}
        />
      </form>
    </div>
  );
};

export default TextSideBar;
