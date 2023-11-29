import Card from "@/components/blog/BlogPostCard";
import RichText_Detail from "@/components/blog_detail/CTFL_RichText_Blog_Detail";
import { client, previewClient } from "@/lib/contentful";
import Link from "next/link";
import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

export const revalidate = 1;

async function getBlogPostsBySlug(slug: string) {
    const response = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
    });

    console.log(response.items);
    return response.items;
}

const BlogPostDetail = async (props: any) => {
    const { isEnabled } = draftMode();
    //console.log(isEnabled);
    //console.log(props.searchParams);
    const currentClient = isEnabled ? previewClient : client;

    //console.log(props.params.slug);
    const response = await currentClient.getEntries({
        content_type: "blogPost",
        "fields.slug": props.params.slug,
    });

    if (!response.items.length) {
        redirect("/blog");
    }

    const blogPost = response.items[0];
    //console.log(blogPost);
    //console.log(blogPost.fields.conteudo);

    return (
        <main className="Page">
            {isEnabled && (
                <div className="Preview_Container">
                    <p>Você está pré-visualizando o seu conteúdo!</p>
                    <Link href="/api/exit-preview">
                        <p>Sair do modo de preview</p>
                    </Link>
                </div>
            )}
            <RichText_Detail document={blogPost.fields.conteudo} />
        </main>
    );
};

export default BlogPostDetail;
