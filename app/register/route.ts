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
    const endpoint = urlParams.get('endpoint');
    const p256dh = urlParams.get('p256dh');
    const auth = urlParams.get('auth');
    
    const subscription = {
        subscription: {
            endpoint,
            expirationTime: null,
            keys: {
                p256dh,
                auth,
            }
        }
    }

    return Response.json({
        hi: true
    }, {
        status: 201
    })
}
