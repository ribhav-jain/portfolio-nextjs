import React, { useState, useEffect } from "react";
import styles from "./SocialMedia.module.css";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Once the component mounts, we know it's client-side
    setIsClient(true);
  }, []);

  return (
    <div className={styles.socialMediaDiv}>
      {socialMediaLinks.map((media, index) => (
        <a
          key={index}
          href={media.link}
          className={styles.iconButton}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(event) => (event.target.style.color = media.color)}
          onMouseLeave={(event) => (event.target.style.color = "#74808a")}
        >
          {isClient && (
            <span
              className="iconify"
              data-icon={media.icon}
              data-inline="false"
            ></span>
          )}
        </a>
      ))}
    </div>
  );
}
