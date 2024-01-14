import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./GithubRepoCard.module.css";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";

const GithubRepoCard = ({ repo, theme }) => {
  const openRepoInNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={styles.repoCard}
        onClick={() => openRepoInNewTab(repo.url)}
        style={{ backgroundColor: theme.highlight }}
      >
        <div className={styles.cardHeader}>
          <Image
            src={`/images/book.png`}
            alt={repo.name}
            width={40}
            height={40}
            objectFit="contain"
          />
          <h3 className={styles.repoName} style={{ color: theme.text }}>
            {repo.name}
          </h3>
        </div>
        <p className={styles.repoDescription} style={{ color: theme.text }}>
          {repo.description}
        </p>
        <div className={styles.cardFooter}>
          <ProjectLanguages logos={repo.languages} />
          <span
            className={styles.creationDate}
            style={{ color: theme.secondaryText }}
          >
            Created on {repo.createdAt.split("T")[0]}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default GithubRepoCard;
