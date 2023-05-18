import React, {useEffect, useRef} from 'react';
import cl from '@/styles/Results.module.css'
import girl from '../../public/resultsImages/placeholderGirl.png'
import Image from "next/image";
import RecommendationButtons from "@/Components/RecommendationButtons/RecommendationButtons";
import {useSelector} from "react-redux";

function results() {
    const image = useSelector((state) => state.image.value)
    console.log(image)
    
    return (
        <div className={cl.results}>
            <div className={cl.container}>
                {image==="Empty"
                    ? <Image className={cl.mainImage} src={girl} alt={"Scanned face"}/>
                    : <Image width={216} height={239} className={cl.mainImage} src={image} alt={"Scanned face result"}/>
                }
                <div className={cl.desc}>
                    <h1>Описание</h1>
                    <h2>Акне <span className={cl.accuracy}>95%</span></h2>
                    <p>
                        Это заболевание, связанное с повышением выделения кожного сала,
                        увеличением и закупоркой сальных желез. В том месте кожи, где возникла закупорка
                        сальной железы, происходит размножение пропионобактерий акне. Бактерии вызывают воспаление
                        и на этом месте формируются угри.
                    </p>
                </div>
                <div className={cl.causes}>
                    <h2>Причины</h2>
                    <ul>
                        <li>Генетика. Предрасположенность к угревой болезни, можно унаследовать от близких и не очень близких родственников. Именно поэтому некоторые люди не следят за кожей, а угри их не атакуют.</li>
                        <li>Неполадки в эндокринной системе. Железы вырабатывают больше сала, усиливается ороговение кожи, а это, в свою очередь, способствует закупориванию пор и появлению угрей.</li>
                        <li>Инфекция. Propionibacterium acnes (P. acnes) обитает на поверхности кожи в норме. Именно она способствует воспалению закупоренных сальных желез.</li>
                    </ul>
                </div>
                <div className={cl.procedures}>
                    <h2>Рекомендуемые процедуры</h2>
                    <ul>
                        <li>Мезотерапия</li>
                        <li>Пиллинги</li>
                        <li>Микродермабразия</li>
                        <li>Фотолечение</li>
                        <li>Чистка лица</li>
                    </ul>
                </div>
                <div className={cl.warning}>
                    <h2>ВАЖНО!</h2>
                    <p>Все эти процедуры строго согласовать с вашим лечащим специалистом!</p>
                </div>
            </div>
            <RecommendationButtons page={"Results"}/>
        </div>
    );
}

export default results;