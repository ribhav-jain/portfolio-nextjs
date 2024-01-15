import React from "react";
import Home from "./home/index";
import Layout from "../components/layout/Layout";
import { chosenTheme } from "../styles/theme";

const IndexPage = () => {
  const renderContent = () => {
    return <Home theme={chosenTheme} />;
  };

  return <Layout>{renderContent()}</Layout>;
};

export default IndexPage;
