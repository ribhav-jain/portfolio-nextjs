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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.repoCard}
      onClick={() => openRepoInNewTab(repo.url)}
      style={{
        background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
      }}
    >
      <div className={styles.cardHeader}>
        <Image
          src={`/images/book.png`}
          alt={repo.name}
          width={40}
          height={40}
          objectFit="contain"
        />
        <h3
          className={styles.repoName}
          style={{ color: theme.text || "#1a1a1a" }}
        >
          {repo.name}
        </h3>
      </div>
      <p
        className={styles.repoDescription}
        style={{ color: theme.text || "#333" }}
      >
        {repo.description}
      </p>
      <div className={styles.cardFooter}>
        <ProjectLanguages logos={repo.languages} />
        <span
          className={styles.creationDate}
          style={{ color: theme.secondaryText || "#555" }}
        >
          Created on {repo.createdAt.split("T")[0]}
        </span>
      </div>
    </motion.div>
  );
};

export default GithubRepoCard;
