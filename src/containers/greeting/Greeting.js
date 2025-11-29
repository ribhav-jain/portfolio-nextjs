import React from "react";
import { motion } from "framer-motion";
import styles from "./Greeting.module.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import Image from "next/image";
import { chosenTheme } from "../../styles/theme";

const Greeting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="greeting"
      className={styles.greetingContainer}
      role="region"
      aria-label="Hero — Introduction"
    >
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

          <motion.div
            className={styles.socialAndButtons}
            variants={itemVariants}
          >
            <SocialMedia theme={chosenTheme} />
            <div className={styles.resumeButtonContainer}>
              <Button
                text="See my resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={chosenTheme}
                className={styles.resumeButton}
                ariaLabel="Open resume in a new tab"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.greetingIllustrationContainer}
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
          }}
          whileHover={{ translateY: -8, scale: 1.02 }}
        >
          <div className={styles.imageWrap} aria-hidden="false">
            <Image
              src="/images/developer.svg"
              alt={greeting.imageAlt || "Illustration of developer at a desk"}
              layout="responsive"
              width={600}
              height={400}
              priority={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Greeting;
