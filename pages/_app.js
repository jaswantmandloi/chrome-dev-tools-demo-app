import Head from "next/head";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
