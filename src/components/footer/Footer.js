import React from "react";
import { motion } from "framer-motion";

import styles from "./Footer.module.css";
import { greeting } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

export default function Footer(props) {
  return (
    <div className={styles.footerDiv}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p
          className={styles.footerText}
          style={{ color: chosenTheme.secondaryText }}
        >
          Copyright{" "}
          <span role="img" aria-label="copyright">
            ©
          </span>{" "}
          {new Date().getFullYear()} by {greeting.title}
        </p>
      </motion.div>
    </div>
  );
}
