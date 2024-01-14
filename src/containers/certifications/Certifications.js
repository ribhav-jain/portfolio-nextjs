import React from "react";
import { motion } from "framer-motion";
import styles from "./Certifications.module.css";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { certifications } from "../../portfolio";

const Certifications = ({ theme }) => {
  return (
    <div className={styles.certificationsContainer} id="certs">
      <div className={styles.headerContainer}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.header}
          style={{ color: theme.text }}
        >
          Certifications
        </motion.h1>
      </div>
      <div className={styles.cardsContainer}>
        {certifications.certifications.map((cert, index) => (
          <CertificationCard key={index} certificate={cert} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
