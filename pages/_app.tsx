import "../styles/globals.css";
import "../styles/header.css";
import "../styles/banner.css";
import "../styles/hero.css";
import "../styles/intro.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
