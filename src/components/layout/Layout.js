import React from "react";
import Head from "next/head";
import { seo } from "../../portfolio.js";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.og && (
          <>
            <meta property="og:title" content={seo.og.title} />
            <meta property="og:type" content={seo.og.type} />
            <meta property="og:url" content={seo.og.url} />
            {seo.og.image && (
              <meta property="og:image" content={seo.og.image} />
            )}
          </>
        )}
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
