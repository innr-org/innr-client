import React from 'react'
import classes from '../styles/Scanning.module.css'

function Scanning() {
    return (
        <section className={classes.scanning}>
            <div className={classes.container}>
                <img className={classes.scanningImg} src="../scanImgs/scanning-face.png" alt="scanning-face" />
                <img className={classes.scanningIcon} src="../scanIcons/dashed-circle.svg" alt="dashed-circle" />
            </div>
            <div className={classes.scanningShot}>
                <div className={classes.scanningAction}></div>
                <div className={classes.scanningCameraShot}>
                    <img src="../scanIcons/camera.png/" alt="camera" />
                </div>
                <div className={classes.scanningAction}></div>
        </div>
        </section>
    );
}

export default Scanning;