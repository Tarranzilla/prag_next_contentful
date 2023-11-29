import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import CTFL_Img_Loader from "./CTFL_Img_Loader";
import Link from "next/link";

const options = {
    renderMark: {
        [MARKS.CODE]: (text: any) => {
            return (
                <pre>
                    <code>{text}</code>
                </pre>
            );
        },
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
            if (node.content.find((item: any) => item.marks?.find((mark: any) => mark.type === "code"))) {
                return (
                    <div className="RichText_Code_Container">
                        <pre>
                            <code className="RichText_Code">{children}</code>
                        </pre>
                    </div>
                );
            }

            return <p className="RichText_Pragraph">{children}</p>;
        },

        [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="RichText_Heading_1">{children}</h1>,

        [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="RichText_Heading_2">{children}</h2>,

        [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="RichText_Heading_3">{children}</h3>,

        [INLINES.ENTRY_HYPERLINK]: (node: any) => {
            if (node.data.target.sys.contentType.sys.id === "post") {
                return (
                    <Link className="RichText_Link" href={`/posts/${node.data.target.fields.slug}`}>
                        {node.data.target.fields.title}
                    </Link>
                );
            }
        },

        [INLINES.HYPERLINK]: (node: any) => {
            const text = node.content.find((item: any) => item.nodeType === "text")?.value;
            return (
                <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="RichText_Link">
                    {text}
                </a>
            );
        },

        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
                return (
                    <iframe
                        height="400"
                        width="100%"
                        src={node.data.target.fields.embedUrl}
                        title={node.data.target.fields.title}
                        allowFullScreen={true}
                        className="RichText_VideoEmbed"
                    />
                );
            }
        },

        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return (
                <CTFL_Img_Loader
                    src={node.data.target.fields.file.url}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.title}
                    className="RichText_Img"
                />
            );
        },
    },
};

const RichText = ({ document }: { document: any }) => {
    return <div className="RichText_Container">{documentToReactComponents(document, options)}</div>;
};

export default RichText;
