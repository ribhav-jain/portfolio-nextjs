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
import Image from "next/image";
import { competitiveSites } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

export default function Education() {
  const theme = chosenTheme;

  return (
    <div className={styles.educationContainer}>
      <Header theme={theme} />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.headingSection}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/education.svg"
              alt="Education illustration"
              layout="responsive"
              width={200} // Original width of image
              height={200} // Original height of image
              style={{ objectFit: "contain" }}
            />
            {/* <EducationImg theme={theme} /> */}
          </div>
          <div className={styles.textWrapper}>
            <h1 style={{ color: theme.text }}>Education</h1>
            <h3 style={{ color: theme.text }}>
              Basic Qualification and Certifications
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
