import Project from "./Project";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Project
        title="SocialMedia"
        description="twitter like social media with notification system & follow/unfollow system and infinite scrolling."
        techStacks={[
          "React",
          "React Query",
          "Node Js",
          "Mongo DB",
          "Socket Io",
          "Tailwind",
          "Daisy Ui",
          "Cloudinary"
        ]}
        link="https://social-media-4be7.onrender.com/"
        githubLink="https://github.com/Copheles/social-media"
      />
      <Project
        title="BootStrapShop"
        description="Fully Featured Ecommerce Website with notifications system and advanced filtering functions."
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
        description="Fully Featured Job Website with comment replies system implementing infinite tree data structure with recursive functions."
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
  );
};

export default Projects;
