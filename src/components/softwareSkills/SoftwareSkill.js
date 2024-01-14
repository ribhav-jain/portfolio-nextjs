import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import styles from "./SoftwareSkill.module.css";

const SoftwareSkill = ({ logos }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component has mounted
  }, []);

  return (
    <div className={styles.softwareSkillsContainer}>
      <ul className={styles.devIconList}>
        {logos.map((logo, index) => (
          <li
            key={index}
            className={styles.devIconItem}
            data-tip
            data-for={logo.skillName}
          >
            {isClient && (
              <span
                className="iconify"
                data-icon={logo.icon}
                style={logo.style}
                data-inline="false"
              />
            )}
            {isClient && (
              <ReactTooltip id={logo.skillName} effect="solid">
                <strong>{logo.skillName}</strong>
              </ReactTooltip>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwareSkill;
