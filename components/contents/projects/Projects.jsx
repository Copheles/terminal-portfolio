import Project from "./Project";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>

      <div className={styles.terminalBody}>

        <Project
          title="SocialMedia"
          description="Twitter-like social media platform with real-time notifications, follow/unfollow system, and infinite scrolling."
          techStacks={[
            "React",
            "React Query",
            "Node Js",
            "Mongo DB",
            "Socket Io",
            "Tailwind",
            "Daisy Ui",
            "Cloudinary",
          ]}
          link="https://social-media-4be7.onrender.com/"
          githubLink="https://github.com/Copheles/social-media"
        />

        <Project
          title="BootStrapShop"
          description="Fully-featured ecommerce website with notifications system and advanced filtering capabilities."
          techStacks={[
            "React",
            "Redux",
            "RTK Query",
            "Node Js",
            "Mongo DB",
            "Socket Io",
            "BootStrap",
          ]}
          link="https://bootstrapshop.onrender.com/"
          githubLink="https://github.com/Copheles/BootstrapShop"
        />

        <Project
          title="JobMyanmar"
          description="Comprehensive job platform with comment replies system implementing infinite tree data structure with recursive functions."
          techStacks={[
            "React",
            "Redux",
            "Node Js",
            "Mongo DB",
            "Socket Io",
            "Chakra Ui",
          ]}
          link="https://job-myanmar.onrender.com/"
          githubLink="https://github.com/Copheles/Job-Myanmar"
        />
      </div>
    </div>
  );
};

export default Projects;
