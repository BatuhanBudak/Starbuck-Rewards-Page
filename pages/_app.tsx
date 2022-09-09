import "../styles/globals.css";
import "../styles/header.css";
import "../styles/banner.css";
import "../styles/hero.css";
import "../styles/intro.css";
import "../styles/tabs.css";
import "../styles/extras.css";
import "../styles/payment.css";
import "../styles/stars.css";
import "../styles/questions.css";
import "../styles/terms.css";
import "../styles/footer.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
