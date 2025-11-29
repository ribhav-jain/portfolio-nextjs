import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import SkillSection from "./SkillSection";
import { chosenTheme } from "../../styles/theme";

const Skills = () => {
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
    <div className={styles.skillsContainer} id="skills">
      <motion.div
        className={styles.skillsHeaderContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className={styles.skillsHeader} style={{ color: chosenTheme.text }}>
          What I Do?
        </h1>
        {/* <p className={styles.skillsIntro} style={{ color: chosenTheme.secondaryText }}>
          Interfaces, tools and data solutions focused on clarity.
        </p> */}
      </motion.div>
      <SkillSection theme={chosenTheme} />
    </div>
  );
};

export default Skills;
