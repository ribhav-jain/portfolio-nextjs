import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import styles from "./SoftwareSkill.module.css";

export default function SoftwareSkill(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component has mounted
  }, []);

  return (
    <div>
      <div className={styles.softwareSkillsMainDiv}>
        <ul className={styles.devIcons}>
          {props.logos.map((logo, index) => (
            <React.Fragment key={index}>
              <li
                data-tip
                data-for={logo.skillName}
                className={styles.softwareSkillInline}
                name={logo.skillName}
              >
                {isClient && (
                  <span
                    className="iconify"
                    data-icon={logo.icon}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                )}
              </li>
              {isClient && (
                <ReactTooltip id={logo.skillName} effect="solid">
                  <strong>{logo.skillName}</strong>
                </ReactTooltip>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
