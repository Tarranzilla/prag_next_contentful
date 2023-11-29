import { client } from "@/lib/contentful";
import BlogPostCard from "@/components/blog/BlogPostCard";

const Blog = async () => {
    const response = await client.getEntries({ content_type: "blogPost" });

    return (
        <main className="Page">
            <div className="BlogPost_Container">
                {response.items.map((item: any) => (
                    <BlogPostCard key={item.sys.id} blogPost={item} />
                ))}
            </div>
        </main>
    );
};

export default Blog;
