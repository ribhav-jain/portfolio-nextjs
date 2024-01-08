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

export default function Projects(props) {
  const theme = chosenTheme;

  return (
    <div className={styles.projectsMain}>
      <Header theme={theme} />
      <div className={styles.basicProjects}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.projectsHeadingDiv}
        >
          <div className={styles.projectsHeadingImgDiv}>
            <ProjectsImg theme={theme} />
          </div>
          <div className={styles.projectsHeadingTextDiv}>
            <h1
              className={styles.projectsHeadingText}
              style={{ color: theme.text }}
            >
              {projects.title}
            </h1>
            <p
              className={styles.projectsHeaderDetailText}
              style={{ color: theme.secondaryText }}
            >
              {projects["description"]}
            </p>
          </div>
        </motion.div>
      </div>
      <div className={styles.repoCardsDivMain}>
        {projects.projectDetails.data.map((repo, index) => {
          return <GithubRepoCard key={index} repo={repo} theme={theme} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className={styles.projectButton}
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
