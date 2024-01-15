import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import DataScienceLottie from "../../../public/lottie/data_science.json";
import FrontendLottie from "../../../public/lottie/frontend.json";
import BackendLottie from "../../../public/lottie/backend.json";
import { skills } from "../../portfolio";

function GetSkillImgLottie(props) {
  if (props.fileName === "DataScienceLottie") {
    return <DisplayLottie animationData={DataScienceLottie} />;
  } else if (props.fileName === "FrontendLottie") {
    return <DisplayLottie animationData={FrontendLottie} />;
  } else if (props.fileName === "BackendLottie") {
    return <DisplayLottie animationData={BackendLottie} />;
  } else if (props.fileName === "DataScienceImg") {
    return <DataScienceImg theme={props.theme} />;
  } else if (props.fileName === "FullStackImg") {
    return <FullStackImg theme={props.theme} />;
  }
  return null;
}

export default function SkillSection(props) {
  const theme = props.theme;

  const leftToRightVariant = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.5,
      },
    },
  };

  const rightToLeftVariant = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.5,
      },
    },
  };

  return (
    <div className={styles.skillSectionContainer}>
      {skills.data.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <motion.div
            className={styles.skillImageWrapper}
            variants={leftToRightVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <GetSkillImgLottie fileName={skill.fileName} theme={theme} />
          </motion.div>
          <div className={styles.skillDescriptionWrapper}>
            <motion.h1
              className={styles.skillHeading}
              style={{ color: theme.text }}
              variants={rightToLeftVariant}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              {skill.title}
            </motion.h1>
            <motion.div
              variants={rightToLeftVariant}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <SoftwareSkill logos={skill.softwareSkills} />
            </motion.div>
            <motion.div
              variants={rightToLeftVariant}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              {skill.skills.map((skillSentence, sentenceIndex) => (
                <p
                  key={sentenceIndex}
                  className={`${styles.skillSubTitle} ${styles.skillText}`}
                  style={{ color: theme.secondaryText }}
                >
                  {skillSentence}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
