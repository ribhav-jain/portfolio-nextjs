import React from "react";
import ReactTooltip from "react-tooltip";
import styles from "./CompetitiveSites.module.css";

export default function CompetitiveSites(props) {
  return (
    <div className={styles.competitiveSitesMainDiv}>
      <ul className={styles.devIcons}>
        {props.logos.map((logo, index) => (
          <React.Fragment key={index}>
            <li
              data-tip
              data-for={logo.siteName}
              className={styles.competitiveSitesInline}
              name={logo.siteName}
            >
              <a
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="iconify"
                  data-icon={logo.icon}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </a>
            </li>
            <ReactTooltip id={logo.siteName} effect="solid">
              <strong>{logo.siteName}</strong>
            </ReactTooltip>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
