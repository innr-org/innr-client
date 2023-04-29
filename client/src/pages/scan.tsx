import React, {useState} from 'react';
import dynamic from 'next/dynamic'
import cl from '../styles/Scan.module.css'
import Button from "@/Components/UI/button/Button";
import Wave from "react-wavify";

function scan() {
    const Video = dynamic(() => import('../Components/Video/Video'), { ssr: false })

    const [hovered, setHovered] = useState(false)

    function activateAnimation(){
        setHovered(true)
    }
    function disableAnimation(){
        setHovered(false)
    }

    return (
        <div>
            <section className={cl.scanning}>
                <div className={cl.container}>
                    <div className={cl.imgWrapper}>
                        <div className={cl.waves}>
                            <img className={hovered ? [cl.wave, cl.waveActive].join(' ') : cl.wave} src="../wavesSvgs/waveGray.svg" alt="wave-svg-gray"/>
                            <img className={hovered ? [cl.wave, cl.waveActive].join(' ') : cl.wave} src="../wavesSvgs/waveGreen.svg" alt="wave-svg-green"/>
                            <img className={hovered ? [cl.wave, cl.waveActive].join(' ') : cl.wave} src="../wavesSvgs/waveYellow.svg" alt="wave-svg-yellow"/>
                        </div>
                        <img className={cl.border} src="../scanImgs/border.svg" alt="scan-example" />
                        <img className={cl.person} src="../scanImgs/person.png" alt=""/>
                    </div>
                    <Button style={{padding: '19px 137px'}} onMouseEnter={activateAnimation} onMouseLeave={disableAnimation}>Начать</Button>
                </div>
            </section>
        </div>
    );
}

export default scan;