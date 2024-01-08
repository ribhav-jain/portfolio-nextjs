import React from "react";
import ReactTooltip from "react-tooltip";
import styles from "./ProjectLanguages.module.css";

export default function ProjectLanguages(props) {
  return (
    <div>
      <div className={styles.softwareSkillsMainDiv}>
        <ul className={styles.devIconsLanguages}>
          {props.logos.map((logo, index) => {
            return (
              <React.Fragment key={index}>
                <li
                  data-tip
                  data-for={logo.name}
                  className={styles.softwareSkillInlineLanguages}
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.icon}
                    data-inline="false"
                  ></span>
                </li>
                <ReactTooltip id={logo.name} effect="solid">
                  {logo.name}
                </ReactTooltip>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
