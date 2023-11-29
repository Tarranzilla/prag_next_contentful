"use client";

import Image from "next/image";
import { Suspense } from "react";

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

export default function CTFL_Img_Loader(props) {
    return (
        <Suspense
            fallback={
                <div className="CLTF_Image_Loader">
                    <p>Carregando Imagem...</p>
                </div>
            }
        >
            <Image className="CLTF_Image" alt={props.alt} loader={imageLoader} {...props} />
        </Suspense>
    );
}
