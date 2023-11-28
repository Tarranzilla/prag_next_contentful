import { client } from "@/lib/contentful";
import Card from "@/components/Card";

const Blog = async () => {
    const response = await client.getEntries({ content_type: "blogPost" });
    console.log(response.items[0].fields.imgThumb.fields.file.details.image.width);

    return (
        <main className="Page Blog">
            <Card blogPost={response.items[0]} />
            <Card blogPost={response.items[1]} />
        </main>
    );
};

export default Blog;
