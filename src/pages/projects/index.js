import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { greeting, projects } from "../../portfolio";
import ProjectsImg from "./ProjectsImg";
import { chosenTheme } from "../../styles/theme";

export default function Projects({ onToggle }) {
  const theme = chosenTheme;

  return (
    <div className={styles.projectsContainer}>
      <Header theme={theme} />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.headingSection}
        >
          <div className={styles.imageWrapper}>
            <ProjectsImg theme={theme} />
          </div>
          <div className={styles.textWrapper}>
            <h1 style={{ color: theme.text }}>{projects.title}</h1>
            <p style={{ color: theme.secondaryText }}>{projects.description}</p>
          </div>
        </motion.div>
        <div className={styles.repoCards}>
          {projects.projectDetails.data.map((repo, index) => (
            <GithubRepoCard key={index} repo={repo} theme={theme} />
          ))}
        </div>
        <Button
          text="More Projects"
          className={styles.projectButton}
          href={greeting.githubProfile}
          newTab
          theme={theme}
        />
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
