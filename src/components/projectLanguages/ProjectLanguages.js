import React from "react";
import ReactTooltip from "react-tooltip";
import styles from "./ProjectLanguages.module.css";

const ProjectLanguages = ({ logos }) => {
  return (
    <div className={styles.languagesContainer}>
      <ul className={styles.languageIcons}>
        {logos.map((logo, index) => (
          <li
            key={index}
            className={styles.languageIcon}
            data-tip
            data-for={logo.name}
          >
            <span className="iconify" data-icon={logo.icon}></span>
            <ReactTooltip id={logo.name} effect="solid">
              {logo.name}
            </ReactTooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLanguages;
