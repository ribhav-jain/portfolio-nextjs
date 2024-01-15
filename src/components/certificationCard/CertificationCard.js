import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CertificationCard.module.css";

export default function CertificationCard({ certificate, theme }) {
  const { link, color_code, logo_path, alt_name, title, subtitle } =
    certificate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.certCard}
    >
      <div className={styles.content}>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className={styles.contentOverlay}></div>
          <div
            className={styles.certHeader}
            style={{ backgroundColor: color_code }}
          >
            <div className={styles.logoImg}>
              <Image
                src={`/images/${logo_path}`}
                alt={alt_name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={`${styles.contentDetails} ${styles.fadeInTop}`}>
            <span
              className="iconify"
              data-icon="akar-icons:info"
              style={{ color: "#fff", fontSize: "2rem" }}
            ></span>
          </div>
        </Link>
      </div>
      <div className={styles.certBody}>
        <h2 className={styles.certBodyTitle} style={{ color: theme.text }}>
          {title}
        </h2>
        <h3
          className={styles.certBodySubtitle}
          style={{ color: theme.secondaryText }}
        >
          {subtitle}
        </h3>
      </div>
    </motion.div>
  );
}
