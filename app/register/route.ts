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
    const subscription = JSON.parse(subscriptionString);

    await kv.lpush('subscriptions', subscription);

    console.log('subscription added')

    return Response.json({
        hi: true
    }, {
        status: 201
    })
}
