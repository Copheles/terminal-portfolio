/* eslint-disable react/prop-types */

import ContentBox from "../contentBox/ContentBox";
import styles from "./mainContent.module.css";
import LsBox from "../contents/lsBox/LsBox";
import Welcome from "../contents/welcome/Welcome";
import NotFound from "../contents/notFound/NotFound";
import About from "../contents/about/About";
import Skill from "../contents/skill/Skill";
import Contact from "../contents/contact/Contact";
import Education from "../contents/education/Education";
import Experience from "../contents/experience/Experience";
import Projects from "../contents/projects/Projects";

const MainContent = ({ item }) => {
  let renderContent;

  switch (item.text.toLowerCase()) {
    case "welcome":
      renderContent = <Welcome />;
      break;
    case "exp":
      renderContent = <Experience />;
      break;
    case "about":
      renderContent = <About />;
      break;
    case "edu":
      renderContent = <Education />;
      break;
    case "ls":
      renderContent = <LsBox />;
      break;
    case "skill":
      renderContent = <Skill />;
      break;
    case "contact":
      renderContent = <Contact />;
      break;
    case "projects":
      renderContent = <Projects />;
      break;
    default:
      renderContent = <NotFound />;
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.sideBox}>
          <label className={styles.sideText}>
            copheles@porfolio<span className={styles.first}>:</span>
            <span className={styles.second}>$</span>
          </label>
          <input
            className={styles.input}
            type="text"
            value={item.text}
            disabled
          />
        </div>
        <p className={styles.dateText}>{item.currentTime}</p>
      </div>
      <ContentBox>{renderContent}</ContentBox>
    </div>
  );
};

export default MainContent;
