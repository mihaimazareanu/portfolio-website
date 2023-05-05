import { ThemeContextProvider } from '@/contexts/ThemeContext';
import Theme from '../styles/theme';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='description' content='This webpage displays the web development projects I have been involved in'/>
        <title>Mihai&apos;s portfolio page</title>
      </Head>
      <ThemeContextProvider>
        <Theme> 
          <Component {...pageProps} />
          <Analytics />
        </Theme>
      </ThemeContextProvider>
    </>
  );
}