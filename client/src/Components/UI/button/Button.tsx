import React, { ReactNode } from 'react'
import classes from './Button.module.css'

interface Button{
    children?: ReactNode;
    props?: any;
}

function Button({children, ...props}:Button) {
    return (
        <button {...props} className={classes.btn}>{children}</button>
    );
}

export default Button;