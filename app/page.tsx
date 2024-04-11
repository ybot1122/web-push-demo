"use client"

import { useSw } from "./useSw";

function showNotification() {
  Notification.requestPermission().then((result) => {

    console.log(result)

    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Test Notification", {
          body: "Buzz! Buzz! " + new Date(),
          icon: "https://static-assets.bamgrid.com/product/disneyplus/favicons/msftpwa-192x192-aurora.97f08a1eb58995c81687d0cf3f953796.png",
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
            clientFocus: true
          }),
        });
      }}>Client Focus Notification</button>

<button onClick={() => {
        fetch('./sendNotification', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            title: 'Disneys Wish!',
            icon: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3CC31DA390ACF6E62149C94B29CF972EC24DDB3E7AB9057E1BB9F3E9B2AC8DCD/scale?width=400&aspectRatio=1.78&format=jpeg',
            body: 'Time to Watch Wish! \u2728',
            data: {
              href: '/movies/wish/2DhMv5u72nYs'
            }
          }),
        });
      }}>Wish!</button>


<button onClick={() => {
        fetch('./sendNotification', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            title: 'Bad Batch on Disney+',
            icon: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1B7FE678C10F1D17E95C75591E592485C79996758847E5ADB079590829B8ED5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
            body: 'Watch Bad Batch; Interact You Must.',
            data: {
              href: '/series/star-wars-the-bad-batch/4gMliqFxxqXC'
            }
          }),
        });
      }}>Bad Batch</button>


<button onClick={() => {
        fetch('./sendNotification', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            title: 'Dancing With the Stars LIVE',
            icon: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/9c484bfc-c6b3-4416-8e51-034bb6dff834/compose?format=webp&label=standard_art_disney-original_178&width=800',
            body: 'Tune in now, or see more details!',
            actions: [
              {action: 'golive',
                title: 'Watch Live'
              },
              {action: 'details',
                title: 'Details'
              }
            ],
            data: {
              golive: '/play/a3344131-ce2b-49cc-976a-c0a6c848a300',
              details: '/browse/entity-7d918be0-4130-4551-aab8-c7dcae85d35f',
            }
          }),
        });
      }}>DWTS</button>


    </main>
  );
}
