import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Error.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TopButton from "../components/topButton/TopButton";
import { chosenTheme } from "../styles/theme";

export default function Error({ statusCode }) {
  const theme = chosenTheme;

  return (
    <div className={styles.errorMain}>
      <Header theme={theme} />
      <div className={styles.errorClass}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 style={{ color: theme.text }}>Oops!</h1>
          <h1 style={{ color: theme.text }} className={styles.error404}>
            404
          </h1>
          <p style={{ color: theme.secondaryText }}>
            The requested page is unavailable at the moment!
          </p>
          <Link href="/home" passHref>
            <span
              className="main-button"
              style={{
                color: theme.body,
                backgroundColor: theme.buttonColor,
                border: `solid 1px ${theme.buttonColor}`,
                display: "inline-flex",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Go Home
            </span>
          </Link>
        </motion.div>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
