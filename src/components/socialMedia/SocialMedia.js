import React, { useState, useEffect } from "react";
import styles from "./SocialMedia.module.css";
import { socialMediaLinks } from "../../portfolio";

const SocialMedia = ({ alignment = "flex-start" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts
  }, []);

  const handleMouseEnter = (event, color) => {
    event.target.style.color = color;
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = "#74808a";
  };

  return (
    <div
      className={styles.socialMediaContainer}
      style={{ justifyContent: alignment }}
    >
      {socialMediaLinks.map((media, index) => (
        <a
          key={index}
          href={media.link}
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(event) => handleMouseEnter(event, media.color)}
          onMouseLeave={handleMouseLeave}
        >
          {isClient && (
            <span
              className="iconify"
              data-icon={media.icon}
              data-inline="false"
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
