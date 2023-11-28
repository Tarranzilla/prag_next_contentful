import Link from "next/link";
import CTFL_Img_Loader from "./CTFL_Img_Loader";
import RichText from "./RichText";

const Card = ({ blogPost }: { blogPost: any }) => {
    const { titulo, slug, autor, introducao, imgThumb, conteudo } = blogPost.fields;

    return (
        <div className="card">
            <h2>{titulo}</h2>
            <h3>{autor}</h3>
            <RichText document={introducao} />
            <Link href={`/blog/${slug}`}>Leia mais</Link>
            <CTFL_Img_Loader
                src={imgThumb.fields.file.url}
                width={imgThumb.fields.file.details.image.width}
                height={imgThumb.fields.file.details.image.height}
                quality="100"
                alt={titulo}
            />
        </div>
    );
};

export default Card;
