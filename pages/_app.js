import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }
  }, []);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ul className="menu">
        <li>
          <Link href="/">
            <a>Elements</a>
          </Link>
        </li>
        <li>
          <Link href="/console">
            <a>Console</a>
          </Link>
        </li>
        <li>
          <Link href="/sources">
            <a>Sources</a>
          </Link>
        </li>
        <li>
          <Link href="/network">
            <a>Network</a>
          </Link>
        </li>
        <li>
          <Link href="/application">
            <a>Application</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />

      <style jsx>{`
        .menu {
          display: flex;
          list-style: none;
          justify-content: space-around;
          max-width: 50%;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
