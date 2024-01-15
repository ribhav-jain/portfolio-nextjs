import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import { experience } from "../../portfolio";
import ExperienceImg from "./ExperienceImg";
import { chosenTheme } from "../../styles/theme";

export default function Experience() {
  const theme = chosenTheme;

  return (
    <div className={styles.experienceContainer}>
      <Header theme={theme} />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.headingSection}
        >
          <div className={styles.imageWrapper}>
            <ExperienceImg theme={theme} />
          </div>
          <div className={styles.textWrapper}>
            <h1 style={{ color: theme.text }}>{experience.title}</h1>
            <h3 style={{ color: theme.text }}>{experience.subtitle}</h3>
            <p style={{ color: theme.secondaryText }}>
              {experience.description}
            </p>
          </div>
        </motion.div>
        <ExperienceAccordion sections={experience.sections} theme={theme} />
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
