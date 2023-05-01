import React from 'react';
import classes from './Img.module.css'

interface Img
{
    // [size: number|number]: Object[];
    size: number;
    children: string;
    borderRadius: number;
    props?: any;
}

function Img({size, children, borderRadius, ...props}:Img) {
    return (
        <img {...props} width={size} height={size} src={children} style={{ borderRadius: borderRadius }}>
        </img>
    );
}

export default Img;