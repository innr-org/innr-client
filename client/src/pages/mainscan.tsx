import React from 'react'
import classes from "@/styles/MainScan.module.css";
import AnalysisCard from "@/Components/AnalysisCard";
import Footer from "@/Components/Footer";
import DraggableMenu from "@/Components/UI/draggableMenu/DraggableMenu"
import {useRouter} from "next/router";

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
                    <AnalysisCard />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default mainscan;