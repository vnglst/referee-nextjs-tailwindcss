import { AppProps } from "next/app";

import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/dialog.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
