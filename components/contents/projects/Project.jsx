/* eslint-disable react/prop-types */
import styles from "./projects.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiSocketdotio,
  SiRedis,
  SiMongodb,
  SiChakraui,
  SiTailwindcss,
  SiDaisyui,
  SiCloudinary,
  SiBootstrap,
  SiReactquery,
} from "react-icons/si";
const Project = ({ title, description, techStacks, link, githubLink }) => {
  const handleIcon = (text) => {
    let icon;
    switch (text) {
      case "React":
        icon = <FaReact color="lightblue" />;
        break;
      case "React Query":
        icon = <SiReactquery color="rgb(224, 141, 141)" />;
        break;
      case "Redux":
        icon = <SiRedux color="#BA8fff" />;
        break;
      case "Cloudinary":
        icon = <SiCloudinary color="rgb(86, 114, 178)" />;
        break;
      case "RTK Query":
        icon = <SiRedux color="#BA8fff" />;
        break;
      case "Node Js":
        icon = <FaNodeJs color="rgb(156, 222, 157)" />;
        break;
      case "Mongo DB":
        icon = <SiMongodb color="rgb(156, 222, 157)" />;
        break;
      case "Socket Io":
        icon = <SiSocketdotio color="#cec8c8ee" />;
        break;
      case "Tailwind":
        icon = <SiTailwindcss color="lightblue" />;
        break;
      case "Daisy Ui":
        icon = <SiDaisyui />;
        break;
      case "Chakra Ui":
        icon = <SiChakraui color="#4ac4c2" />;
        break;
      case "BootStrap":
        icon = <SiBootstrap color="rgb(137, 39, 228)" />;
        break;
      case "Redis":
        icon = <SiRedis color="rgb(224, 141, 141)" />;
        break;
      default:
        icon = null;
        break;
    }
    return icon;
  };
  return (
    <div className={styles.projectBox}>
      <div className={styles.projectMainBox}>
        <div className={styles.projectHeader}>
          <p className={styles.projectName}>{title}</p>
        </div>
        <div className={styles.projectDescription}>
          <p className={styles.desp}>{description}</p>
          <div className={styles.linkDiv}>
            <a href={link} className={styles.projectLink} target="_blank">
              <FaLink />
            </a>
            <a href={githubLink} className={styles.projectLink} target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <h5 className={styles.techUsed}>Tech Used:</h5>
        <div className={styles.bulletsBox}>
          {techStacks.map((ts) => (
            <div className={styles.bullet} key={ts}>
              <div>{handleIcon(ts)}</div>
              <div>{ts}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
