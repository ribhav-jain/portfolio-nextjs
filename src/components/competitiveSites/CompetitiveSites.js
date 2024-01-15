import React from "react";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import styles from "./CompetitiveSites.module.css";

const CompetitiveSites = ({ logos }) => (
  <div className={styles.competitiveSitesContainer}>
    <ul className={styles.siteIcons}>
      {logos.map((logo, index) => (
        <li
          key={index}
          className={styles.siteItem}
          data-tip
          data-for={logo.siteName}
        >
          <Link
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
          </Link>
          <ReactTooltip id={logo.siteName} effect="solid">
            <strong>{logo.siteName}</strong>
          </ReactTooltip>
        </li>
      ))}
    </ul>
  </div>
);

export default CompetitiveSites;
