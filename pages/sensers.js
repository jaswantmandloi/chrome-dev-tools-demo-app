import Head from "next/head";
import { useEffect, useState } from "react";

const globalValue1 = "1234";

export default function Sources() {
  const [values, setValues] = useState({ first: "", second: "" });
  const [sum, setSum] = useState("");
  const [printingValue1, setPrintingValue1] = useState("");
  // useEffect(() => {
  //   console.log("test");

  //   for (let i = 0; i <= 10; i++) {
  //     console.log({ i });
  //   }
  // }, []);

  function handleSumClick() {
    console.log({ values, time: new Date().getTime() });
    const finalSum = values.first + values.second;
    setSum(finalSum);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleVersionClick() {
    const nextJsVersionGetter = getVersionCallback();
    const version1 = nextJsVersionGetter();
    console.log({
      version1,
    });
  }

  function updateGlobalAtRunTime() {
    setPrintingValue1(globalValue1);
  }

  return (
    <div className="container">
      <Head>
        <title>Sources Tab</title>
      </Head>

      <main>
        <h1 className="title">Sources Tab</h1>

        <div>{sum}</div>
        <div>
          <input name="first" onChange={handleChange} />
        </div>

        <div>
          <input name="second" onChange={handleChange} />
        </div>

        <div>
          <button onClick={handleSumClick}>Sum</button>
        </div>

        <div>
          {printingValue1}
          <button onClick={updateGlobalAtRunTime}>updateGlobalAtRunTime</button>
        </div>

        <div>
          <button onClick={handleVersionClick}>Log version</button>
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

function getVersionCallback() {
  const version = next.version;

  return function () {
    return version;
  };
}
