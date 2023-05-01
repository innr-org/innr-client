import React from 'react'
import Button from '../UI/button/Button'
import classes from './RecommendationButtons.module.css'

function RecommendationButtons() {
    return (
        <div className={classes.btns}>
            <button className={classes.btn}>1</button>
            <button className={classes.btn}>2</button>
            <button className={classes.btn}>Рекомендации</button>
        </div>
    );
}

export default RecommendationButtons;