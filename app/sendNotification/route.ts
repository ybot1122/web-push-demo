import { kv } from "@vercel/kv";

// @ts-ignore
import webPush from 'web-push'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {

  const body = await request.json();



  if (body.password !== process.env.PASSWORD) {
    return Response.json({
      hi: false
  }, {
      status: 400
  })

  }


  delete body.password

    await webPush.setVapidDetails(
        "https://web-push-demo-virid.vercel.app/",
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
      );
      
      console.log('sending notification...')

      const subs = await kv.lrange('subscriptions2',0,-1);

      const payload = JSON.stringify(body)

      const send = subs.map(async (s) => {
        try {
          await webPush.sendNotification(s, payload)
          console.log('successfully sent notification')
        } catch (e) {
          console.error('failed to send notification')
        }
      })

      await Promise.all(send);

    return Response.json({
        hi: true
    }, {
        status: 201
    })

}
