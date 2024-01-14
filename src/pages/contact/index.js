import React from "react";
import { motion } from "framer-motion";

import styles from "./ContactComponent.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import ContactImg from "./ContactImg";
import { greeting, contactPageData } from "../../portfolio";
import { chosenTheme } from "../../styles/theme";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

export default function Contact(props) {
  const theme = chosenTheme;

  return (
    <div className={styles.contactMain}>
      <Header theme={theme} />
      <div className={styles.basicContact}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.contactHeadingDiv}
        >
          <div className={styles.contactHeadingImgDiv}>
            <ContactImg theme={theme} />
          </div>
          <div className={styles.contactHeadingTextDiv}>
            <h1
              className={styles.contactHeadingText}
              style={{ color: theme.text }}
            >
              {ContactData["title"]}
            </h1>
            <p
              className={styles.contactHeaderDetailText}
              style={{ color: theme.secondaryText }}
            >
              {ContactData["description"]}
            </p>
            <SocialMedia theme={theme} alignment="center" />
            <div className={styles.resumeBtnDiv}>
              <Button
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.addressHeadingDiv}
        >
          <div className={styles.contactHeadingImgDiv}>
            <AddressImg theme={theme} />
          </div>
          <div className={styles.addressHeadingTextDiv}>
            <h1
              className={styles.addressHeadingText}
              style={{ color: theme.text }}
            >
              {addressSection["title"]}
            </h1>
            <p
              className={styles.contactHeaderDetailText}
              style={{ color: theme.secondaryText }}
            >
              {addressSection["subtitle"]}
            </p>
            <div
              style={{ display: !phoneSection["hidden"] ? "inline" : "none" }}
            >
              <h1
                className={styles.addressHeadingText}
                style={{ color: theme.text }}
              >
                {phoneSection["title"]}
              </h1>
              <p
                className={styles.contactHeaderDetailText}
                style={{ color: theme.secondaryText }}
              >
                {phoneSection["subtitle"]}
              </p>
            </div>
            <div className={styles.addressBtnDiv}>
              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={addressSection.location_map_link}
                theme={theme}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
