// @ts-ignore
import webPush from 'web-push'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {

    await webPush.setVapidDetails(
        "https://web-push-demo-virid.vercel.app/",
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
      );
      

    const payload = await request.json();

    console.log(payload)

      // TODO get subscriptions from db

    await webPush.sendNotification(payload.subscription);

    return Response.json({
        hi: true
    }, {
        status: 201
    })

}
