
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    return new Response(process.env.VAPID_PUBLIC_KEY)
}
