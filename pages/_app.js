import "../styles/globals.css";
import client from "../apollo";
import { ApolloProvider } from "@apollo/client";
import Footer from "../src/components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}
export default MyApp;
