import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="" // Some 3rd-party SDK https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
