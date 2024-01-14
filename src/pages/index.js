import React, { useState, useEffect } from "react";
import Home from "./home/index";
import Loading from "../components/loading/Loading";
import Layout from "../components/layout/Layout";
import { chosenTheme } from "../styles/theme";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = () => {
      setIsLoading(false);
    };

    const loadingDelay = setTimeout(loadContent, 2000);

    return () => clearTimeout(loadingDelay);
  }, []);

  const renderContent = () => {
    return isLoading ? <Loading /> : <Home theme={chosenTheme} />;
  };

  return <Layout>{renderContent()}</Layout>;
};

export default IndexPage;
