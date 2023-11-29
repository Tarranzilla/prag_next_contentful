import Card from "@/components/Card";
import RichText from "@/components/RichText";
import { client, previewClient } from "@/lib/contentful";
import Link from "next/link";
import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

const BlogPostDetail = async (props: any) => {
    const { isEnabled } = draftMode();
    console.log(isEnabled);
    //console.log(props.searchParams);
    const currentClient = isEnabled ? previewClient : client;

    const response = await currentClient.getEntries({
        content_type: "blogPost",
        "fields.slug": props.slug,
    });

    if (!response.items.length) {
        redirect("/blog");
    }

    const blogPost = response.items[0];

    return (
        <main className="Page BlogPostDetail">
            {isEnabled && (
                <div className="Preview_Container">
                    <p>Você está pré-visualizando o seu conteúdo!</p>
                    <Link href="/api/exit-preview">
                        <p>Sair do modo de preview</p>
                    </Link>
                </div>
            )}
            <Card blogPost={blogPost} />
            <RichText document={blogPost.fields.conteudo} />
        </main>
    );
};

export default BlogPostDetail;
