import Link from "next/link";
import CTFL_Img_Loader from "../CTFL_Img_Loader";
import RichText from "../CTFL_RichText";

const BlogPostCard = ({ blogPost }: { blogPost: any }) => {
    const { titulo, slug, autor, introducao, imgThumb, conteudo } = blogPost.fields;

    return (
        <div className="BlogPost">
            <CTFL_Img_Loader
                src={imgThumb.fields.file.url}
                width={imgThumb.fields.file.details.image.width}
                height={imgThumb.fields.file.details.image.height}
                quality="100"
                alt={titulo}
                className="BlogPost_Thumb"
            />
            <div className="BlogPost_Header">
                <h2 className="BlogPost_Title">
                    <div className="BlogPost_Date">
                        <p>29 - 11 - 2023</p>
                    </div>
                    {titulo}
                </h2>
                <div className="BlogPost_Author">
                    <h4>{autor}</h4>
                    <p className="BlogPost_Author_Avatar"></p>
                </div>
            </div>

            <div className="BlogPost_Content">
                <div className="BlogPost_Intro">
                    <RichText document={introducao} />
                </div>
            </div>

            <div className="BlogPost_Footer">
                <Link className="BlogPost_Read_Link" href={`/blog/${slug}`}>
                    Leia mais
                </Link>
            </div>
        </div>
    );
};

export default BlogPostCard;
