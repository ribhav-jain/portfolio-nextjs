import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import SkillSection from "./SkillSection";
import { chosenTheme } from "../../styles/theme";

export default function Skills() {
  const theme = chosenTheme;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className={styles.main} id="skills">
      <motion.div
        className={styles.skillsHeaderDiv}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className={styles.skillsHeader} style={{ color: theme.text }}>
          What I Do?
        </h1>
      </motion.div>
      <SkillSection theme={theme} />
    </div>
  );
}
