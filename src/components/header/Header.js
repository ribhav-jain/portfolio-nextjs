import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./Header.module.css";
import { greeting } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");
  const { text, body, highlight } = chosenTheme;

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href) =>
    currentPath === href
      ? {
          className: styles.active,
        }
      : null;

  const onMouseEnter = (event) => {
    // event.target.style.backgroundColor = highlight;
  };

  const onMouseOut = (event) => {
    // event.target.style.backgroundColor = "transparent";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className={styles.header} style={{ backgroundColor: body }}>
        <Link href="/home">
          <span className={styles.logo} style={{ color: text }}>
            <span>&lt;</span>
            <span className={styles.logoName}>{greeting.logo_name}</span>
            <span>/&gt;</span>
          </span>
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div
            className={`${styles.navicon} ${isMenuOpen ? styles.open : ""}`}
          ></div>
        </div>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}>
          <ul>
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link href={path}>
                  <span
                    style={{ ...isActive(path) }}
                    onMouseEnter={onMouseEnter}
                    onMouseOut={onMouseOut}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </motion.div>
  );
};

export default Header;
