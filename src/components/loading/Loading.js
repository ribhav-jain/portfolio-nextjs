import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cube}>
        <div className={styles.sides}>
          <div className={styles.top}></div>
          <div className={styles.right}></div>
          <div className={styles.bottom}></div>
          <div className={styles.left}></div>
          <div className={styles.front}></div>
          <div className={styles.back}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
