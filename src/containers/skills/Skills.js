import React from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;

  return (
    <div className={styles.main} id="skills">
      <div className={styles.skillsHeaderDiv}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.skillsHeader}
          style={{ color: theme.text }}
        >
          What I Do?
        </motion.h1>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
