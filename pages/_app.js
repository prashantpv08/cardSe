import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, SSRProvider } from "react-bootstrap";
import { Layout } from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";

//css
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/scss/globals.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Not Adding the css automatically for font awesome
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [showButton, setShowButton] = useState(false);
  const [headClass, setHeadClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setHeadClass(true);
      } else setHeadClass(false);

      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SSRProvider>
        <Layout headClass={headClass}>
          <Component {...pageProps} />
        </Layout>
        {showButton && (
          <Button className="scrollToTop" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </Button>
        )}
      </SSRProvider>
    </>
  );
}

export default MyApp;
