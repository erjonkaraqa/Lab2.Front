import React from "react";
import { ImageHelperTypes } from "./types";

export const Image = ({ src, alt, className, ...props }: ImageHelperTypes) => {
    const baseUrl = 'http://127.0.0.1:5000/img/products/'
    return (
        <img src={`${baseUrl}${src}`} alt={alt} className={className} {...props} />
    )
}