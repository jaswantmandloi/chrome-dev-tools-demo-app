import Head from "next/head";
import { useEffect, useState } from "react";

export default function Sources() {
  return (
    <div className="container">
      <Head>
        <title>Animations Tab</title>
      </Head>

      <main>
        <h1 className="title">Animations Tab</h1>
        <div className="colorAnimation"></div>
      </main>

      <style jsx>{`
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        @keyframes colorChangeAnimation {
          from {
            background-color: red;
          }
          to {
            background-color: yellow;
          }
        }

        .colorAnimation {
          width: 100px;
          height: 100px;
          background-color: red;
          animation-name: colorChangeAnimation;
          animation-duration: 4s;
        }

        .test {
          width: 500px;
        }
      `}</style>
    </div>
  );
}
