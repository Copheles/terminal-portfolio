import styles from "./lsBox.module.css";

const lsData = [
  { skill: "List all of my skills." },
  { about: "To see about my informations." },
  { edu: "To see my educations." },
  { contact: "List all of the contacts." },
  { exp: "Show my work experiences." },
  { projects: "To see the projects i have built." },
  { clear: "To clear the history." },
];

const LsBox = () => {
  return (
    <div className={styles.container}>
      {lsData.map((data, index) => (
        <div className={styles.box} key={index}>
          {Object.entries(data).map(([key, value]) => (
            <div className={styles.entry} key={key}>
              <p className={styles.key}>{key === "ctrlL" ? "ctrl + l" : key}</p>
              <p className={styles.value}>{value}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LsBox;
