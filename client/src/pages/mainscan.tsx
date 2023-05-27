import React from 'react'
import {useRouter} from "next/router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import classes from "@/styles/MainScan.module.css";
import Footer from "@/Components/Footer";
import 'swiper/css';
import 'swiper/css/pagination'


function mainscan() {
    const router = useRouter()

    return (
        <div>
            <div className={classes.container}>
                <section className={classes.scan}>
                    <div className={classes.scanGradientHeader}></div>
                    <h1 className={classes.scanTitle}>С возвращением, Юзер</h1>
                    <div className={classes.scanNotificationWrapper}>
                        <img src="./scanIcons/notification-bell.svg" alt="" className={classes.scanNotificationIcon}/>
                    </div>
                    <div onClick={() => router.push('/scan')} className={classes.scanFace}>

                        <div className={classes.scanningFaceIcon}>
                            <img src="./scanIcons/scan.svg" alt="scan" />
                            <p>Сканировать лицо</p>
                        </div>

                        <div className={classes.scanAva}></div>
                    </div>
                </section>
            </div>

            <section className={classes.analysis}>
                <div className={classes.container}>
                    <h2 className={classes.analysisTitle}>Список Анализов</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={80}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="../scanImgs/analysis-img.png" alt="analysis" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.sliderItem}>
                                <img src="../scanIcons/plus.svg" alt="plus" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.sliderItem}>
                                <img src="../scanIcons/plus.svg" alt="plus" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes.sliderItem}>
                                <img src="../scanIcons/plus.svg" alt="plus" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default mainscan;