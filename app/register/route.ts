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
