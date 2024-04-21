import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Portfolio O.D" />
        <meta name="keywords" content="Portfolio O.D" />
        <meta name="author" content="O.D" />
        <link rel="icon" href="/OD.png" />
        <title>Portfolio O.D</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
