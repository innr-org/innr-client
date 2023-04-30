import React, { ReactNode } from 'react';
import classes from "./Modal.module.css";

interface ModalProps {
    children: ReactNode;
    props: any;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

function Modal({ children, visible, setVisible, ...props }: ModalProps) {
    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div {...props}
            className={rootClasses.join(' ')}
            onClick={(e) => setVisible(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;