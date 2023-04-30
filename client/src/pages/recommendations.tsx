import RecommendedProducts from '@/Components/RecommendedProducts'
import RecommendedSpecialists from '@/Components/RecommendedSpecialists';
import React from 'react'
import classes from '../styles/Recommendations.module.css'

function recommendations() {
    return (
        <div className={classes.recommendations}>
            <div className={classes.container}>
                <RecommendedProducts />
                <RecommendedSpecialists />
            </div>
        </div>
    );
}

export default recommendations;