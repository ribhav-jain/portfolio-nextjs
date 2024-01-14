import React from "react";
import styles from "./ExperienceAccordion.module.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

const ExperienceAccordion = ({ sections, theme }) => {
  return (
    <div className={styles.experienceAccordion}>
      {sections.map((section, index) => (
        <div
          className={styles.accordionPanel}
          title={section.title}
          key={index}
        >
          {section.experiences.map((experience, expIndex) => (
            <ExperienceCard
              key={expIndex}
              experience={experience}
              theme={theme}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExperienceAccordion;
