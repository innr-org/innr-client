import RecommendedProducts from '@/Components/RecommendedProducts'
import RecommendedSpecialists from '@/Components/RecommendedSpecialists';
import React from 'react'
import classes from '../styles/Recommendations.module.css'
import RecommendationButtons from "@/Components/RecommendationButtons/RecommendationButtons";

function recommendations() {
    return (
        <div className={classes.recommendations}>
            <div className={classes.container}>
                <RecommendedProducts />
                <RecommendedSpecialists />
            </div>
            <RecommendationButtons page={"Recommendations"}/>
        </div>
    );
}

export default recommendations;