import React from "react";
import { motion } from "framer-motion";

import styles from "./EducationComponent.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

export default function Education() {
  const theme = chosenTheme;

  return (
    <div className={styles.educationMain}>
      <Header theme={theme} />
      <div className={styles.basicEducation}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.headingDiv}
        >
          <div className={styles.headingImgDiv}>
            <EducationImg theme={theme} />
          </div>
          <div className={styles.headingTextDiv}>
            <h1 className={styles.headingText} style={{ color: theme.text }}>
              Education
            </h1>
            <h3 className={styles.headingSubText} style={{ color: theme.text }}>
              Basic Qualification and Certifcations
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
        </motion.div>
        <Educations theme={theme} />
        <Certifications theme={theme} />
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
