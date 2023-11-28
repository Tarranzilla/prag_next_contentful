import Card from "@/components/Card";
import RichText from "@/components/RichText";
import { client } from "@/lib/contentful";
import { redirect } from "next/navigation";

interface Params {
    slug: string;
}

const BlogPostDetail = async ({ params }: { params: Params }) => {
    const response = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": params.slug,
    });

    if (!response.items.length) {
        redirect("/blog");
    }

    const blogPost = response.items[0];

    return (
        <main className="Page BlogPostDetail">
            <Card blogPost={blogPost} />
            <RichText document={blogPost.fields.conteudo} />
        </main>
    );
};

export default BlogPostDetail;
