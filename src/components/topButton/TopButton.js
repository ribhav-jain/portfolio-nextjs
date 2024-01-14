import React, { useEffect, useState } from "react";
import styles from "./TopButton.module.css";
import { chosenTheme } from "../../styles/theme";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 30;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    color: chosenTheme.body,
    backgroundColor: isVisible ? chosenTheme.buttonColor : "transparent",
    visibility: isVisible ? "visible" : "hidden",
  };

  return (
    <button
      onClick={scrollToTop}
      style={buttonStyle}
      className={styles.topButton}
      title="Go to top"
      aria-label="Go to top"
    >
      <i className="fas fa-chevron-up" aria-hidden="true" />
    </button>
  );
};

export default TopButton;
