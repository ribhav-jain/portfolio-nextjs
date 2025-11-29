import React from "react";
import { motion } from "framer-motion";
import styles from "./Educations.module.css";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

const Educations = () => {
  return (
    <div className={styles.educationsContainer} id="educations">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={styles.educationsHeader}
        style={{ color: chosenTheme.text }}
      >
        Degrees Received
      </motion.h1>
      {/* <p
        className={styles.educationsIntro}
        style={{ color: chosenTheme.secondaryText }}
      >
        Academic foundation in computer science and engineering.
      </p> */}
      <div className={styles.degreesList}>
        {degrees.degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} theme={chosenTheme} />
        ))}
      </div>
    </div>
  );
};

export default Educations;
