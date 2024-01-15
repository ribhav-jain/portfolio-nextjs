import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./DegreeCard.module.css";

export default function DegreeCard({ degree, theme }) {
  return (
    <div className={styles.degreeCard}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className={styles.cardImg}
      >
        <Image
          src={`/images/${degree.logo_path}`}
          alt={degree.alt_name}
          width={200}
          height={200}
          objectFit="contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className={styles.cardBody}
      >
        <div
          className={styles.bodyHeader}
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className={styles.bodyHeaderContent}>
            <h2 className={styles.cardTitle} style={{ color: theme.text }}>
              {degree.title}
            </h2>
            <h3 className={styles.cardSubtitle} style={{ color: theme.text }}>
              {degree.subtitle}
            </h3>
          </div>
          <h3 className={styles.duration} style={{ color: theme.text }}>
            {degree.duration}
          </h3>
        </div>
        <div className={styles.bodyContent}>
          {degree.descriptions.map((sentence, index) => (
            <p
              key={index}
              className={styles.contentList}
              style={{ color: theme.text }}
            >
              {sentence}
            </p>
          ))}
          <Link
            href={degree.website_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
            style={{ backgroundColor: theme.headerColor }}
          >
            <p className={styles.btn} style={{ color: theme.text }}>
              Visit Website
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
