/* eslint-disable react/prop-types */
import styles from "./projects.module.css";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = ({ title, description, techStacks, link, githubLink }) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <span className={styles.projectName}>### {title}</span>
      </div>

      <div className={styles.projectDescription}>
        <span className={styles.prompt}>$ </span>
        <span>{description}</span>
      </div>

      <div className={styles.techStack}>
        <div className={styles.techTitle}>
          <span className={styles.prompt}>$ </span>
          <span>tech_stack:</span>
        </div>
        <div className={styles.techList}>
          {techStacks.map((tech, index) => (
            <span key={index} className={styles.techItem}>
              [{tech}]
            </span>
          ))}
        </div>
      </div>

      <div className={styles.projectLinks}>
        <span className={styles.prompt}>$ </span>
        <span>links: </span>
        <a
          href={githubLink}
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> source
        </a>
        <span> | </span>
        <a
          href={link}
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink /> live
        </a>
      </div>

      <div className={styles.projectSeparator}></div>
    </div>
  );
};

export default Project;
