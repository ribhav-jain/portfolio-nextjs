import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ExperienceCard.module.css";

export default function ExperienceCard({ experience, theme }) {
  const {
    logo_path,
    title,
    company,
    company_url,
    duration,
    location,
    description,
  } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.experienceCard}
    >
      <div className={styles.logoDiv}>
        <Image
          src={`/images/${logo_path}`}
          alt={title}
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h3 className={styles.title} style={{ color: theme.text }}>
              {title}
            </h3>
            <p className={styles.company} style={{ color: theme.text }}>
              <Link
                href={company_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company}
              </Link>
            </p>
          </div>
          <div className={styles.headerDetails}>
            <p
              className={styles.duration}
              style={{ color: theme.secondaryText }}
            >
              {duration}
            </p>
            <p
              className={styles.location}
              style={{ color: theme.secondaryText }}
            >
              {location}
            </p>
          </div>
        </div>
        <p className={styles.description} style={{ color: theme.text }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
