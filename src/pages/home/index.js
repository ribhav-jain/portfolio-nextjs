import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

const TopButton = dynamic(
  () => import("../../components/topButton/TopButton"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function Home({ theme }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my portfolio website!" />
      </Head>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </>
  );
}
