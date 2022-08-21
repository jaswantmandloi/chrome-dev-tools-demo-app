import Head from "next/head";
import { useEffect, useState } from "react";

export default function Network() {
  const [item, setItem] = useState(null);

  function getJson() {
    fetch("/api/network");
  }

  useEffect(() => {
    async function getItem() {
      const itemResouce = await fetch("/api/network");
      const itemVal = await itemResouce.json();
      setItem(itemVal);
    }

    getItem();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Network Tab</title>
      </Head>

      <main>
        <h1 className="title">Network Tab</h1>

        {item !== null ? (
          <h2>
            <a href="" class="title--link">
              <img src="/vercel.svg" alt="Vercel" className="logo" />
            </a>
            Inspect Network Activity Demo
          </h2>
        ) : null}

        <div>
          <button onClick={getJson}>Get Json</button>
        </div>
      </main>

      <style jsx>{`
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>
    </div>
  );
}
