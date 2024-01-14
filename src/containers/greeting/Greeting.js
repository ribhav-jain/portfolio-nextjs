import React from "react";
import { motion } from "framer-motion";
import styles from "./Greeting.module.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import FeelingProud from "./FeelingProud";
import { chosenTheme } from "../../styles/theme";

const Greeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.greetingContainer}
      id="greeting"
    >
      <div className={styles.greetingContent}>
        <div className={styles.greetingTextContainer}>
          <h1
            className={styles.greetingTitle}
            style={{ color: chosenTheme.text }}
          >
            {greeting.title}
          </h1>
          <p
            className={styles.greetingSubtitle}
            style={{ color: chosenTheme.secondaryText }}
          >
            {greeting.subTitle}
          </p>
          <SocialMedia theme={chosenTheme} />
          <div className={styles.resumeButtonContainer}>
            <Button
              text="See my resume"
              newTab={true}
              href={greeting.resumeLink}
              theme={chosenTheme}
              className={styles.resumeButton}
            />
          </div>
        </div>
        <div className={styles.greetingIllustrationContainer}>
          <FeelingProud theme={chosenTheme} />
        </div>
      </div>
    </motion.div>
  );
};

export default Greeting;
