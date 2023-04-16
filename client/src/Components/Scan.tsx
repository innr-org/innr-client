import React from 'react'
import classes from '../styles/Scan.module.css'
import Button from './UI/button/Button'

function Scan() {
    return (
        <section className={classes.scanning}>
            <div className={classes.container}>
                <img className={classes.img} src="../scanImgs/scanExample.png" alt="scan-example" />
                <Button />
            </div>
        </section>
    );
}

export default Scan