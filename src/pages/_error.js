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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "1.1rem",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ← Go Back Home
            </span>
          </Link>
        </motion.div>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
