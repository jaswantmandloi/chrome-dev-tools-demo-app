import Head from "next/head";
import { useEffect, useState } from "react";

export default function Console() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Loading!");
    const h1 = document.querySelector("h1");
    console.log(h1.textContent);
    console.dir(h1);

    const style =
      "background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;";
    console.log("%cTest", style);

    console.assert(document.querySelector("h2"), "h2 not found!");
  }, []);

  useEffect(() => {
    const artists = [
      {
        first: "René",
        last: "Magritte",
      },
      {
        first: "Chaim",
        last: "Soutine",
      },
      {
        first: "Henri",
        last: "Matisse",
      },
    ];

    window.artists = artists;
  }, []);

  console.count();

  function handleCountClick() {
    setCount(count + 1);
    setTimeout(() => {
      setCount((lastValue) => lastValue + 1);
    }, 0);
  }

  function handleClickStackTrace() {
    test1();
  }

  console.timeEnd("renderTime");

  console.time("renderTime");

  return (
    <div className="container">
      <Head>
        <title>Console Tab</title>
      </Head>

      <main>
        <h1 className="title">Console Tab</h1>
        <div>{count}</div>
        <div>
          <button onClick={handleCountClick}>Increase</button>
        </div>
        <div>
          <button onClick={handleClickStackTrace}>Stack Trace</button>
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

function test1() {
  return test2();
}
function test2() {
  return test3();
}
function test3() {
  return test4();
}
function test4() {
  console.trace();
  console.error(`Tacking call stack `);
  return 55;
}
