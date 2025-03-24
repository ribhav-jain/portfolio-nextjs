import React, { useEffect, useState } from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 30);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className={styles.container}>
      <div className={styles.loadingWrapper}>
        <div className={styles.cubeWrapper}>
          <div className={styles.cube}>
            <div className={`${styles.cubeFace} ${styles.front}`}></div>
            <div className={`${styles.cubeFace} ${styles.back}`}></div>
            <div className={`${styles.cubeFace} ${styles.top}`}></div>
            <div className={`${styles.cubeFace} ${styles.bottom}`}></div>
            <div className={`${styles.cubeFace} ${styles.left}`}></div>
            <div className={`${styles.cubeFace} ${styles.right}`}></div>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
          <div className={styles.progressText}>{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
