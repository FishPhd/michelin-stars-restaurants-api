import type { AppProps } from "next/app";

import { Provider } from "urql";
import { client, ssrCache } from "../utils/withUrql";
import "../styles/base.css";

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
