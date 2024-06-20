import styles from "./skill.module.css";
import SkillIcon from "./skillIcon/SkillIcon";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiReactquery,
  SiExpress,
  SiSocketdotio,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiFirebase,
} from "react-icons/si";

const Skill = () => {
  return (
    <div className={styles.container}>
      <SkillIcon
        icon={<FaReact className={styles.skillIcon} />}
        text="React"
        color="lightblue"
      />
      <SkillIcon
        icon={<SiRedux className={styles.skillIcon} />}
        text="Redux"
        color="#BA8fff"
      />
      <SkillIcon
        icon={<FaReact className={styles.skillIcon} />}
        text="React Native"
        color="lightblue"
      />
      <SkillIcon
        icon={<SiRedis className={styles.skillIcon} />}
        text="Redis"
        color="rgb(224, 141, 141)"
      />

      <SkillIcon
        icon={<SiNextdotjs className={styles.skillIcon} />}
        text="Next.js"
        color="#cec8c8ee"
      />
      <SkillIcon
        icon={<FaNodeJs className={styles.skillIcon} />}
        text="Node Js"
        color="rgb(156, 222, 157)"
      />
      <SkillIcon
        icon={<SiExpress className={styles.skillIcon} />}
        text="Express js"
        color="#cec8c8ee"
      />

      <SkillIcon
        icon={<SiSocketdotio className={styles.skillIcon} />}
        text="Socket.io"
        color="#cec8c8ee"
      />
      <SkillIcon
        icon={<SiMongodb className={styles.skillIcon} />}
        text="Mongodb"
        color="rgb(156, 222, 157)"
      />
      <SkillIcon
        icon={<SiPostgresql className={styles.skillIcon} />}
        text="Postgresql"
        color="rgb(53, 76, 131)"
      />
      <SkillIcon
        icon={<SiTypescript className={styles.skillIcon} />}
        text="TypeScript"
        color="rgb(86, 114, 178)"
      />
      <SkillIcon
        icon={<SiChakraui className={styles.skillIcon} />}
        text="Chakra Ui"
        color="#4ac4c2"
      />
      <SkillIcon
        icon={<SiFirebase className={styles.skillIcon} />}
        text="Firebase"
        color="#ebeb8c"
      />
      <SkillIcon
        icon={<SiReactquery className={styles.skillIcon} />}
        text="React Query"
        color="rgb(224, 141, 141)"
      />
    </div>
  );
};

export default Skill;
