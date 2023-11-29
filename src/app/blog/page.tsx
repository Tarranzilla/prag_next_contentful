import { client } from "@/lib/contentful";
import Card from "@/components/Card";

const Blog = async () => {
    const response = await client.getEntries({ content_type: "blogPost" });

    return (
        <main className="Page Blog">
            {response.items.map((item: any) => (
                <Card key={item.sys.id} blogPost={item} />
            ))}
        </main>
    );
};

export default Blog;
