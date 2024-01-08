import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, className, href, newTab, theme }) {
  const onMouseEnter = (event) => {
    event.target.style.backgroundColor = theme.hoverButtonColor;
  };

  const onMouseOut = (event) => {
    event.target.style.backgroundColor = theme.buttonColor;
  };

  return (
    <div className={className}>
      <a
        className={styles.mainButton}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.body,
          backgroundColor: theme.buttonColor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      >
        {text}
      </a>
    </div>
  );
}
