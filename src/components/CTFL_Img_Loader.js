"use client";

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

export default function CTFL_Img_Loader(props) {
    return <Image alt={props.alt} loader={imageLoader} {...props} />;
}
