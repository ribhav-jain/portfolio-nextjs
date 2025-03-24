import React from "react";
import { motion } from "framer-motion";
import styles from "./Greeting.module.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import FeelingProud from "./FeelingProud";
import Image from "next/image";
import { chosenTheme } from "../../styles/theme";

const Greeting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.greetingContainer} id="greeting">
      <motion.div
        className={styles.greetingContent}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className={styles.greetingTextContainer}
          variants={itemVariants}
        >
          <motion.h1
            className={styles.greetingTitle}
            style={{ color: chosenTheme.text }}
            variants={itemVariants}
          >
            {greeting.title}
          </motion.h1>
          <motion.p
            className={styles.greetingSubtitle}
            style={{ color: chosenTheme.secondaryText }}
            variants={itemVariants}
          >
            {greeting.subTitle}
          </motion.p>
          <motion.div variants={itemVariants}>
            <SocialMedia theme={chosenTheme} />
          </motion.div>
          <motion.div
            className={styles.resumeButtonContainer}
            variants={itemVariants}
          >
            <Button
              text="See my resume"
              newTab={true}
              href={greeting.resumeLink}
              theme={chosenTheme}
              className={styles.resumeButton}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.greetingIllustrationContainer}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.98,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <Image
            src="/images/developer.svg"
            alt="Developer illustration"
            layout="responsive"
            width={600} // Original width of image
            height={400} // Original height of image
            style={{ objectFit: "contain" }}
          />
          {/* <FeelingProud theme={chosenTheme} /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Greeting;
