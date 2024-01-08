import React, { useEffect, useState } from "react";

import styles from "./TopButton.module.css";
import { chosenTheme } from "../../styles/theme";

export default function TopButton() {
  const theme = chosenTheme;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(
        document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goUpEvent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    color: theme.body,
    backgroundColor: isVisible ? theme.buttonColor : "transparent",
    visibility: isVisible ? "visible" : "hidden",
  };

  return (
    <div
      onClick={goUpEvent}
      style={buttonStyle}
      className={styles.topButton}
      title="Go up"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </div>
  );
}
