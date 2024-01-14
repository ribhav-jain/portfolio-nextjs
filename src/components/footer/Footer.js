import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { greeting } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.footerContent}
      >
        <p style={{ color: chosenTheme.secondaryText }}>
          Copyright © {currentYear} by {greeting.title}
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
