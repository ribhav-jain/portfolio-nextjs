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

  const fadeInUpVariant = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.1,
      },
    },
  };

  return (
    <div className={styles.skillSectionContainer}>
      {skills.data.map((skill, index) => {
        const titleId = `skill-title-${index}`;
        return (
          <article
            key={index}
            className={styles.skillItem}
            role="article"
            aria-labelledby={titleId}
          >
            <motion.div
              className={styles.skillImageWrapper}
              variants={fadeInUpVariant}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GetSkillImgLottie fileName={skill.fileName} theme={theme} />
            </motion.div>
            <div className={styles.skillDescriptionWrapper}>
              <motion.h2
                id={titleId}
                className={styles.skillHeading}
                style={{ color: theme.text }}
                variants={fadeInUpVariant}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                {skill.title}
              </motion.h2>
              <motion.div
                variants={fadeInUpVariant}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SoftwareSkill logos={skill.softwareSkills} />
              </motion.div>
              <motion.div
                variants={fadeInUpVariant}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
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
          </article>
        );
      })}
    </div>
  );
}
