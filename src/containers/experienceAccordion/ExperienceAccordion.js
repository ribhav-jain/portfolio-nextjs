import React from "react";
import styles from "./ExperienceAccordion.module.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

export default function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className={styles.experienceAccord}>
      {props.sections.map((section, index) => {
        return (
          <div
            className={styles.accordPanel}
            title={section["title"]}
            key={index}
          >
            {section["experiences"].map((experience, expIndex) => {
              return (
                <ExperienceCard
                  key={expIndex}
                  experience={experience}
                  theme={theme}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
