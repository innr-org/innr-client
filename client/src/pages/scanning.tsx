import React, {useEffect, useMemo, useState} from 'react'
import cl from '../styles/Scanning.module.css'
import dynamic from "next/dynamic";
import Modal from "@/Components/UI/modal/Modal";
import Button from "@/Components/UI/button/Button";

function scanning() {
    const Video = useMemo(() => dynamic(() => import('../Components/Video/Video'), { ssr: false }), [])
    const [isClicked, setIsClicked] = useState(false)
    const [typeModalActive, setTypeModalActive] = useState(true)
    const [alertModalActive, setAlertModalActive] = useState(false)
    const [selectedType, setSelectedType] = useState({value: '', text: ''})

    useEffect(() => {
        if(selectedType.text !== '' && selectedType.value !== ''){
            setTypeModalActive(false)
            setAlertModalActive(true)
        }
    }, [selectedType])


    const analysisTypes = [
        {value: 'whole', text: 'Все лицо'},
        {value: 'nose', text: 'Нос'},
        {value: 'forehead', text: 'Лоб'},
        {value: 'leftСheek', text: 'Левая щека'},
        {value: 'rightСheek', text: 'Правая щека'},
        {value: 'chin', text: 'Подбородок'},
    ]
    const analysisTypesBtns = analysisTypes.map(type => {
        return (
            <Button style={{padding: '15px 25px'}}
                    onClick={() => setSelectedType({value: type.value, text: type.text})}>
                {type.text}
            </Button>
        )
    })

    return (
        <>
            <Modal visible={typeModalActive} setVisible={setTypeModalActive} style={{textAlign: 'center'}}>
                <h2>Выберите часть лица для анализа</h2>
                <div className={cl.typesBtnsWrapper}>
                    {analysisTypesBtns}
                </div>
            </Modal>
            <Modal style={{textAlign: 'center'}} visible={alertModalActive} setVisible={setAlertModalActive}>
                <h2>Внимание!</h2>
                <br/>
                <h2>Пожалуйста снимите все аксессуары и одежду с головы!</h2>
                <br/>
                <h2>Важно: "{selectedType.text}" должен/должна находится внутри отмеченной зоны (овала)</h2>
                <Button style={{padding: '10px 50px', color: 'darkred', marginTop: '40px'}}
                        onClick={() => setAlertModalActive(false)}
                >
                    Закрыть X
                </Button>
            </Modal>
            <section className={cl.scanning}>
                <div className={cl.container}>
                    <Video isClicked={isClicked} setIsClicked={setIsClicked} scanType={selectedType.value}/>
                </div>
                <div className={cl.scanningShot}>
                    <div className={cl.scanningAction}></div>
                    <div onClick={() => setIsClicked(true)} className={cl.scanningCameraShot}>
                        <img src="../scanIcons/camera.png/" alt="camera" />
                    </div>
                    <div className={cl.scanningAction}></div>
                </div>
            </section>
        </>

    );
}

export default scanning