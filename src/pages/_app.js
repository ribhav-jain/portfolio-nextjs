import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import TagManager from "react-gtm-module";
import "../styles/globals.css";

import { chosenTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tagManagerArgs = {
        gtmId: process.env.NEXT_PUBLIC_GTM_TRACKING_ID,
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <div>
          <Component {...pageProps} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
