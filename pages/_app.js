import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='My portfolio webpage'/>
        <title>Mihai&apos;s portfolio page</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}