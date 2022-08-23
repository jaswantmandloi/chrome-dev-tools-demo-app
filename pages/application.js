import Head from "next/head";
import { useEffect, useState } from "react";

export default function Application() {
  useEffect(() => {
    initializePushNotifications();
    createNotificationSubscription();
  }, []);

  function handleAddLocalStorage() {
    window.localStorage.setItem("local1", new Date().getTime());
  }

  function handleAddSessionStorage() {
    window.sessionStorage.setItem("sesssion1", new Date().getTime());
  }

  function handleAddCookieStorage() {
    document.cookie = `cookie1=${new Date().getTime()}`;
  }

  async function handleAddRecordInDB() {
    const { db } = await getIndexedDB();
    add(db);
  }

  return (
    <div className="container">
      <Head>
        <title>Application Tab</title>
      </Head>

      <main>
        <h1 className="title">Application Tab</h1>

        <div>
          <button onClick={handleAddLocalStorage}>handleAddLocalStorage</button>
        </div>

        <div>
          <button onClick={handleAddSessionStorage}>
            handleAddSessionStorage
          </button>
        </div>

        <div>
          <button onClick={handleAddCookieStorage}>
            handleAddCookieStorage
          </button>
        </div>

        <div>
          <button onClick={handleAddRecordInDB}>handleAddRecordInDB</button>
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

const pushServerPublicKey =
  "BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8";

async function createNotificationSubscription() {
  //wait for service worker installation to be ready, and then

  const serviceWorker = await navigator.serviceWorker.ready;

  const subscription = await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: pushServerPublicKey,
  });

  console.log("User is subscribed.", subscription);
}

function initializePushNotifications() {
  // request user grant to show notification
  return Notification.requestPermission(function (result) {
    return result;
  });
}

const employeeData = [
  { id: "00-01", name: "Demo1", age: 35, email: "demo1@tt.tt" },
  {
    id: "00-02",
    name: "demo2",
    age: 32,
    email: "demo2@tt.tt",
  },
];

function getIndexedDB() {
  const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;

  const IDBTransaction =
    window.IDBTransaction ||
    window.webkitIDBTransaction ||
    window.msIDBTransaction;
  const IDBKeyRange =
    window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

  return new Promise((resolve, reject) => {
    let db;

    const request = indexedDB.open("newDatabase", 1);

    request.onerror = function (event) {
      console.log("error: ");

      reject({ db: null });
    };

    request.onsuccess = function (event) {
      db = request.result;
      console.log("success: " + db);

      resolve({ db, IDBTransaction, IDBKeyRange });
    };

    request.onupgradeneeded = function (event) {
      db = event.target.result;
      const objectStore = db.createObjectStore("employee", { keyPath: "id" });

      for (let i in employeeData) {
        objectStore.add(employeeData[i]);
      }
    };
  });
}

function add(db) {
  var request = db
    .transaction(["employee"], "readwrite")
    .objectStore("employee")
    .add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });

  request.onsuccess = function (event) {
    alert("Kenny has been added to your database.");
  };

  request.onerror = function (event) {
    alert("Unable to add data\r\nKenny is aready exist in your database! ");
  };
}
