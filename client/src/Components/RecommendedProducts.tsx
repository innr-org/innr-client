import React from 'react'
import RecommendedProductItem from './RecommendedProductItem/RecommendedProductItem'
import classes from '../styles/RecommendedProducts.module.css'

function RecommendedProducts({}) {
    return (
        <div>
            <h2 className={classes.title}>Рекомендуемые продукты</h2>
            <RecommendedProductItem src={'/recommendations/cream-1.png'} text={'Dr. Cauracle Pro Balance Moisturizer'}></RecommendedProductItem>
            <RecommendedProductItem src={'/recommendations/cream-2.png'} text={'Dr. Cauracle Pro Balance Oil'}></RecommendedProductItem>
            <RecommendedProductItem src={'/recommendations/cream-3.png'} text={'Dr. Cauracle Spf 50+'}></RecommendedProductItem>

            <p className={classes.text}>
                <span>ВАЖНО: </span>
                эти рекомендации не заменяет вам консультацию с специалистом
            </p>
        </div>
    );
}

export default RecommendedProducts;