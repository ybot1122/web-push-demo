import webPush from 'web-push'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {

    webPush.setVapidDetails(
        "https://example.com/",
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
      );
      

    const payload = await request.json();

    console.log(payload)

    await webPush.sendNotification(payload.subscription);

    return Response.json({
        hi: true
    }, {
        status: 201
    })

}
