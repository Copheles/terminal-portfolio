import { useState } from "react";
import styles from "./experience.module.css";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      title:
        "6 months internship at OMSProvider company (As React Native developer)",
      details:
        "Following the internship, I dedicated 3 months to developing a comprehensive Food Ordering Application designed to transform restaurant-customer interactions. This all-inclusive platform seamlessly integrates pickup, dine-in, delivery, POS, and a rewards system where customers earn points with each purchase redeemable for discounts, exclusive offers, or complimentary items.",
    },
    {
      title:
        "Assistant Developer specializing in MERN stack, Nest.js, Next.js, and React Native (3 months)",
      details:
        "As an Assistant Developer, I created various modules and mini-applications for diverse web and mobile platforms. My responsibilities included implementing secure authentication systems with JWT and OAuth, developing comprehensive dashboard interfaces for Project Management Systems, and building responsive UI components with React and Next.js. I also developed RESTful APIs using Node.js, Express, and Nest.js for backend functionality, integrated third-party services and APIs for extended application capabilities, and collaborated on Expo-based React Native applications for iOS and Android platforms.",
    },
    {
      title:
        "Collaborated on enterprise freelance project for short periods (As MERN-stack developer)",
      details:
        "I worked part-time on the development of a Japanese learning platform, where I contributed to implementing an interactive Kanji drawing canvas and enhancing the user interface with responsive and engaging elements. I also assisted in optimizing performance and integrating backend features that supported user learning progress tracking, helping improve both usability and functionality of the platform.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Professional Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className={styles.qulifications}>
          <div className={styles.sideBox}>
            <div className={styles.dot}></div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.content}>
            <div
              className={`${styles.expSpan} ${
                exp.details ? styles.clickable : ""
              }`}
              onClick={() => exp.details && toggleExpand(index)}
            >
              {exp.title}
            </div>

            {exp.details && expandedIndex === index && (
              <div className={styles.details}>
                <p>{exp.details}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
