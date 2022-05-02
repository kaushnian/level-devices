import '../styles/globals.css';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Level Devices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
