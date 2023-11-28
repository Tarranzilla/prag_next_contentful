export async function GET(request: Request) {
    return new Response("Hello World!", { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();
    return new Response(JSON.stringify(body), { status: 200 });
}
