import { kv } from "@vercel/kv";

// @ts-ignore
import webPush from 'web-push'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {

    await webPush.setVapidDetails(
        "https://web-push-demo-virid.vercel.app/",
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
      );
      
      console.log('sending notification...')

      const subs = await kv.lrange('subscriptions2',0,-1);

      const send = subs.map(async (s) => {
        try {
          await webPush.sendNotification(s)
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
