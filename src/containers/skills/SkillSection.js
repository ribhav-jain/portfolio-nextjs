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
  if (props.fileName === "DataScienceLottie")
    return <DisplayLottie animationData={DataScienceLottie} />;
  else if (props.fileName === "FrontendLottie")
    return <DisplayLottie animationData={FrontendLottie} />;
  else if (props.fileName === "BackendLottie")
    return <DisplayLottie animationData={BackendLottie} />;
  else if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  return "";
}

export default function SkillSection(props) {
  const theme = props.theme;

  return (
    <div>
      {skills.data.map((skill, index) => {
        return (
          <div key={index} className={styles.skillsMainDiv}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className={styles.skillsImageDiv}
            >
              <GetSkillImgLottie fileName={skill.fileName} theme={theme} />
            </motion.div>
            <div className={styles.skillsTextDiv}>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={styles.skillsHeading}
                style={{ color: theme.text }}
              >
                {skill.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <SoftwareSkill logos={skill.softwareSkills} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <div>
                  {skill.skills.map((skillSentence, sentenceIndex) => {
                    return (
                      <p
                        key={sentenceIndex}
                        className={`${styles.subTitle} ${styles.skillsText}`}
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
