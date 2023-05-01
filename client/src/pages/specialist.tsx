import React from 'react';
import styles from '../styles/Specialist.module.css';
import Image from 'next/image';
import ProfilePic from '../../public/assets/images/pp.png';
import Button from "../Components/UI/button/Button";

function Specialist() {
    return (
        <div className={styles.container}>
            <div className={styles.specialist__info}>
                <Image 
                    className={styles.specialist__photo}
                    src={ ProfilePic } 
                    alt='Profile picture' 
                />
                <div className={styles.specialist__text}>
                    <h3 className={styles.specialist__name}>Адель Алибекова</h3>
                    <p className={styles.specialist__type}>Врач дерматолог</p>
                    <Button style={{padding: '3px 22px', borderRadius: '5px', marginTop: '8px', color: "black", fontWeight: '400'}}><span>5000 тг</span> за час</Button>
                </div>
            </div>
            {/* Card */}
            <div className={styles.specialist__card}>
                <div className={styles.specialist__key}>
                    <ul className={styles.keys}>
                        <li className={styles.keys__text}>Город:</li>
                        <li className={styles.keys__text}>Образование:</li>
                        <li className={styles.keys__text}>Опыт работы:</li>
                        <li className={styles.keys__text}>Сертификаты:</li>
                    </ul>
                </div>
                <div className={styles.specialist__values}>
                <ul className={styles.values}>
                        <li className={styles.values__text}>Астана</li>
                        <li className={styles.values__text}>Медицинский университет Астана</li>
                        <li className={styles.values__text}>7 лет</li>
                        <li className={styles.values__text}>Международный кожный институт (IDI) <br></br> Американская Академия Дерматологии (ADA)</li>
                    </ul>
                </div>
            </div>
            {/* Tags */}
            <div className={styles.tags}>
                <h3 className={styles.tag__text}>Теги</h3>
                <div className={styles.tag__names}>
                    <Button style={{padding: '2px 25px', borderRadius: '3px'}}> tag</Button>
                    <Button style={{padding: '2px 25px', borderRadius: '3px'}}> tag</Button>
                    <Button style={{padding: '2px 25px', borderRadius: '3px'}}> tag</Button>
                </div>
            </div>
            <div className={styles.consultation}>
                <Button style={{padding: '13px 11px', borderRadius: '10px', color: "black", fontWeight: '600', fontSize: "20px", width: '334px'}}>Записаться на консультацию </Button>
            </div>
        </div>
    );
};

export default Specialist;