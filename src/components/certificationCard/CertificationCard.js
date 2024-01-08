import React from "react";
import { motion } from "framer-motion";
import styles from "./CertificationCard.module.css";

export default function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.certCard}
    >
      <div className={styles.content}>
        <a href={certificate.link} target="_blank" rel="noopener noreferrer">
          <div className={styles.contentOverlay}></div>
          <div
            className={styles.certHeader}
            style={{ backgroundColor: certificate.color_code }}
          >
            <img
              className={styles.logoImg}
              src={require(`../../../public/images/${certificate.logo_path}`)}
              alt={certificate.alt_name}
            />
          </div>
          <div className={`${styles.contentDetails} ${styles.fadeInTop}`}>
            <span
              className="iconify"
              data-icon="akar-icons:info"
              style={{
                color: "#fff",
                fontSize: "2rem",
              }}
            ></span>
          </div>
        </a>
      </div>
      <div className={styles.certBody}>
        <h2 className={styles.certBodyTitle} style={{ color: theme.text }}>
          {certificate.title}
        </h2>
        <h3
          className={styles.certBodySubtitle}
          style={{ color: theme.secondaryText }}
        >
          {certificate.subtitle}
        </h3>
      </div>
    </motion.div>
  );
}
