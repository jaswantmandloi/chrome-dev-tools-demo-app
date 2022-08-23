import Head from "next/head";
import { useEffect, useState } from "react";

export default function Sensors() {
  const [position, setPosition] = useState({
    coords: {},
  });
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Not supported");
    }
  }

  function showPosition(position) {
    console.log({ position });
    setPosition(position);
  }

  return (
    <div className="container">
      <Head>
        <title>Sensors Tab</title>
      </Head>

      <main>
        <h1 className="title">Sensors Tab</h1>
        <div>
          <div>
            <div>latitude: {position.coords.latitude}</div>
            <div>longitude: {position.coords.longitude}</div>
          </div>

          <button onClick={getLocation}>Get Location</button>
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
