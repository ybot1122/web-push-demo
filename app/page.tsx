"use client"

import { useSw } from "./useSw";

export default function Home() {

  const subscription = useSw();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>

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
