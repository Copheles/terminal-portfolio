import styles from "./about.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaFacebook, FaGithub, FaTwitch } from "react-icons/fa";
import SocialText from "./socialText/SocialText";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src="./rick.jpg" alt="" className={styles.aboutImg} />
        <div className={styles.infoTexts}>
          <h2>
            Copheles <IoMdCheckmarkCircleOutline className={styles.icon} />
          </h2>
          <p>Hello world since 2020.</p>
        </div>
      </div>
      <p className={styles.texts}>
        Hi there, I am software developer. Passionate with web development and
        like to learn new thing related to coding.
      </p>

      <div className={styles.socials}>
        <SocialText
          icon={<FaGithub />}
          icontext="GitHub"
          text="Copheles"
          goToLink="https://github.com/Copheles"
        />
        <SocialText
          icon={<FaFacebook />}
          icontext="Facebook"
          text="Copheles_Collin"
          goToLink="https://www.facebook.com/share/fpoFGYhtsJRBLfRg/?mibextid=LQQJ4d"
        />
        <SocialText
          icon={<FaTwitch />}
          icontext="Twitch"
          text="collinsssfl"
          goToLink="https://www.twitch.tv/collinsssfl"
        />
      </div>
    </div>
  );
};

export default About;
