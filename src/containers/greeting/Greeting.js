import React from "react";
import { motion } from "framer-motion";

import styles from "./Greeting.module.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import FeelingProud from "./FeelingProud";
import { chosenTheme } from "../../styles/theme";

export default function Greeting() {
  const theme = chosenTheme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.greetMain}
      id="greeting"
    >
      <div className={styles.greetingMain}>
        <div className={styles.greetingTextDiv}>
          <div>
            <h1 className={styles.greetingText} style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            <p
              className={`${styles.greetingTextP} ${styles.subTitle}`}
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div className={styles.portfolioRepoBtnDiv}>
              <Button
                text="See my resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
                className={styles.portfolioRepoBtn}
              />
            </div>
          </div>
        </div>
        <div className={styles.greetingImageDiv}>
          <FeelingProud theme={theme} />
        </div>
      </div>
    </motion.div>
  );
}
