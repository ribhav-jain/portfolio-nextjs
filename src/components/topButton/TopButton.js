import React, { useEffect, useState } from "react";
import styles from "./TopButton.module.css";
import { chosenTheme } from "../../styles/theme";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(scrollTop > threshold);
    };

    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 800,
    });
  };

  const buttonStyle = {
    color: chosenTheme.body,
    backgroundColor: chosenTheme.buttonColor,
  };

  return (
    <button
      onClick={scrollToTop}
      style={buttonStyle}
      className={`${styles.topButton} ${isVisible ? styles.visible : ""}`}
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <i className="fas fa-chevron-up" aria-hidden="true" />
    </button>
  );
};

export default TopButton;
