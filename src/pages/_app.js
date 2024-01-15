import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import TagManager from "react-gtm-module";
import "../styles/globals.css";
import Loading from "../components/loading/Loading";
import { chosenTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tagManagerArgs = {
        gtmId: process.env.NEXT_PUBLIC_GTM_TRACKING_ID,
      };
      TagManager.initialize(tagManagerArgs);

      const loadContent = () => {
        setIsLoading(false);
      };

      const loadingDelay = setTimeout(loadContent, 1500);

      return () => clearTimeout(loadingDelay);
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
