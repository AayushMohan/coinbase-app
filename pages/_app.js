import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainsIds = [4, 80001];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
