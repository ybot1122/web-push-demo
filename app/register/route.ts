import querystring from 'node:querystring';

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

    // TODO: store the subscription
    const urlParams = new URLSearchParams(request.url);
    const subscriptionString:string = urlParams.get('subscription') ?? '';

    console.log(urlParams)
    
    const subscription = JSON.parse(subscriptionString);

    console.log(subscription)

    return Response.json({
        hi: true
    }, {
        status: 201
    })
}
