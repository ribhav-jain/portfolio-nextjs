import React from "react";
import { motion } from "framer-motion";

import styles from "./Educations.module.css";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

export default function Educations() {
  const theme = chosenTheme;

  return (
    <div className={styles.main} id="educations">
      <div className={styles.educationsHeaderDiv}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.educationsHeader}
          style={{ color: theme.text }}
        >
          Degrees Received
        </motion.h1>
      </div>
      <div className={styles.educationsBodyDiv}>
        {degrees.degrees.map((degree, index) => {
          return <DegreeCard key={index} degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}
