import { kv } from "@vercel/kv";

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {

    // TODO: store the subscription

    const payload = await request.json();

    console.log(payload)

    return Response.json({
        hi: true
    }, {
        status: 201
    })
}

export async function GET(request: Request) {
    const urlParams = new URLSearchParams(request.url);
    const subscriptionString:string = urlParams.get('subscription') ?? '';
    const subscriptionJson = JSON.parse(subscriptionString);

    if (subscriptionJson.endpoint && subscriptionJson.keys) {
        const isMember = await kv.sismember('subs', subscriptionString);
        if (isMember === 0) {
            console.log('new sub added')
            await kv.sadd('subs', subscriptionString);
            await kv.lpush('subscriptions2', subscriptionString);
        } else {
            console.log('sub already exists')
        }
    }


    return Response.json({
        hi: true
    }, {
        status: 201
    })
}
