"use client"

import { useSw } from "./useSw";

function showNotification() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz! " + new Date(),
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          tag: "vibration-sample",
        });
      });
    }
  });
}


export default function Home() {

  const subscription = useSw();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Hello</h1>

    <button onClick={showNotification}>Local Noti</button>

      <button onClick={() => {
        fetch('./sendNotification', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            subscription: subscription
          }),
        });
      }}>Send Notification</button>
    </main>
  );
}
