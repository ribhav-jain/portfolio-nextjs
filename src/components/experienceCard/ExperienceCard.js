import React from "react";
import { motion } from "framer-motion";
import styles from "./ExperienceCard.module.css";

export default function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={styles.experienceCard}
      >
        <div className={styles.experienceCardLogoDiv}>
          <img
            className={styles.experienceCardLogo}
            src={require(`../../../public/images/${experience["logo_path"]}`)}
            alt={experience["title"]}
          />
        </div>
        <div className={styles.experienceCardBodyDiv}>
          <div className={styles.experienceCardHeaderDiv}>
            <div className={styles.experienceCardHeadingLeft}>
              <h3
                className={styles.experienceCardTitle}
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className={styles.experienceCardCompany}
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className={styles.experienceCardHeadingRight}>
              <p
                className={styles.experienceCardDuration}
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className={styles.experienceCardLocation}
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className={styles.experienceCardDescription}
            style={{ color: theme.text }}
          >
            {experience["description"]}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
