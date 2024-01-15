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

const { contactSection, addressSection, phoneSection } = contactPageData;

export default function Contact({ onToggle }) {
  const theme = chosenTheme;

  const ContactSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.sectionDiv}
    >
      <div className={styles.headingImgDiv}>
        <ContactImg theme={theme} />
      </div>
      <div className={styles.headingTextDiv}>
        <h1 style={{ color: theme.text }}>{contactSection.title}</h1>
        <p style={{ color: theme.secondaryText }}>
          {contactSection.description}
        </p>
        <SocialMedia theme={theme} alignment="center" />
        <div className={styles.buttonDiv}>
          <Button
            text="See My Resume"
            newTab
            href={greeting.resumeLink}
            theme={theme}
          />
        </div>
      </div>
    </motion.div>
  );

  const AddressSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className={styles.sectionDiv}
      style={{ marginTop: "60px" }}
    >
      <div className={styles.headingImgDiv}>
        <AddressImg theme={theme} />
      </div>
      <div className={styles.headingTextDiv}>
        <h1 style={{ color: theme.text }}>{addressSection.title}</h1>
        <p style={{ color: theme.secondaryText }}>{addressSection.subtitle}</p>
        {!phoneSection.hidden && (
          <div>
            <h1 style={{ color: theme.text }}>{phoneSection.title}</h1>
            <p style={{ color: theme.secondaryText }}>
              {phoneSection.subtitle}
            </p>
          </div>
        )}
        <div className={styles.buttonDiv}>
          <Button
            text="Visit on Google Maps"
            newTab
            href={addressSection.location_map_link}
            theme={theme}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={styles.contactMain}>
      <Header theme={theme} />
      <div className={styles.basicContact}>
        <ContactSection />
        <AddressSection />
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
