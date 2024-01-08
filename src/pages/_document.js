import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Ribhav Jain Portfolio" />
          <meta property="og:title" content="Ribhav Jain Portfolio" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://ribhav-jain.github.io/portfolio/"
          />
          <meta
            property="og:description"
            content="Ribhav's Personal Portfolio Website"
          />
          <meta property="og:image" content="/icons/description.png" />
          <meta
            name="keywords"
            content="Ribhav, Portfolio, Ribhav's Portfolio"
          />
          <meta name="author" content="Ribhav" />
          <meta name="application-name" content="Ribhav's Portfolio" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="/manifest.json" />

          {/* Apple Touch Icons */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <meta
            name="msapplication-TileImage"
            content="/icons/ms-icon-144x144.png"
          />

          {/* Stylesheets and Scripts */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
          <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;