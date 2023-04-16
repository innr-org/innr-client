import React from 'react'
import classes from '@/styles/AnalysisCard.module.css'

function AnalysisCard() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.analysisCard}>
                <img src="../scanImgs/analysis-img.png" alt="analysis" />
            </div>
            <div className={classes.analysisCard}>
                <img src="../scanIcons/plus.svg" alt="plus" />
            </div>
            <div className={classes.analysisCard}>
                <img src="../scanIcons/plus.svg" alt="plus" />
            </div>
        </div>
    );
}

export default AnalysisCard;