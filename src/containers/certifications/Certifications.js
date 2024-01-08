import React from "react";
import { motion } from "framer-motion";

import styles from "./Certifications.module.css";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { certifications } from "../../portfolio";

export default function Certifications(props) {
  const theme = props.theme;

  return (
    <div className={styles.main} id="certs">
      <div className={styles.certsHeaderDiv}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.certsHeader}
          style={{ color: theme.text }}
        >
          Certifications
        </motion.h1>
      </div>
      <div className={styles.certsBodyDiv}>
        {certifications.certifications.map((cert, index) => {
          return (
            <CertificationCard key={index} certificate={cert} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}
