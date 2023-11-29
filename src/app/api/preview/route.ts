import { draftMode } from "next/headers";
import { previewClient } from "@/lib/contentful";
import { notFound } from "next/navigation";

// app/routes/blog/[slug].ts
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request: NextRequest) {
    const { pathname, searchParams, hostname, protocol, port } = request.nextUrl;
    console.log(hostname);
    console.log(protocol);
    const host = port ? `${protocol}//${hostname}:${port}` : `${protocol}//${hostname}`;
    console.log(host);

    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");
    console.log(secret);
    console.log(slug);

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Fetch the blog post using the slug...
    const response = await previewClient.getEntries({
        content_type: "blogPost",
        "fields.slug": searchParams.get("slug"),
    });

    const blogPost = response.items[0];
    console.log(blogPost);

    if (!blogPost) {
        return NextResponse.json({ error: "Invalid Slug" }, { status: 401 });
    }

    // Enable draft mode
    draftMode().enable();

    // Redirect to the blog post URL
    const url = `${host}/blog/${blogPost.fields.slug}`;
    return NextResponse.redirect(url);
}
