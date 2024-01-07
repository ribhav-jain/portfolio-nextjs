import React from "react";

import Home from "./home/index";
import { chosenTheme } from "../styles/theme";

export default function IndexPage(props) {
  return <Home theme={chosenTheme} />;
}
