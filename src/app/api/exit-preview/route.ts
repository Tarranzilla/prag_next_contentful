import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET(request: NextRequest) {
    const { hostname, protocol, port } = request.nextUrl;
    const host = port ? `${protocol}//${hostname}:${port}` : `${protocol}//${hostname}`;

    //Disable draft mode
    draftMode().disable();

    // Redirect to the blog post URL
    const url = `${host}/blog`;
    return NextResponse.redirect(url);
}
