import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./Header.module.css";
import SeoHeader from "../seoHeader/SeoHeader";
import { greeting } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

const Header = (props) => {
  const [currentPath, setCurrentPath] = useState("");
  const theme = chosenTheme;

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href) => {
    return currentPath === href ? { fontWeight: "bold" } : {};
  };

  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SeoHeader />
      <div>
        <header className={styles.header}>
          <Link href="/home">
            <span className={styles.logo} style={{ color: theme.text }}>
              <span>&lt;</span>
              <span className={styles.logoName}>{greeting.logo_name}</span>
              <span>/&gt;</span>
            </span>
          </Link>
          <label className={styles.menuIcon} htmlFor="menu-btn">
            <span className={styles.navicon}></span>
          </label>
          <ul className={styles.menu} style={{ backgroundColor: theme.body }}>
            <li>
              <Link href="/home">
                <span
                  style={{ ...isActive("/home"), color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/education">
                <span
                  style={{ ...isActive("/education"), color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Education
                </span>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <span
                  style={{ ...isActive("/experience"), color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Experience
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span
                  style={{ ...isActive("/projects"), color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span
                  style={{ ...isActive("/contact"), color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  Contact Me
                </span>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </motion.div>
  );
};

export default Header;
