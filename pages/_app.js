import * as React from "react";

import "../styles/globals.scss";
import "../public/all";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
