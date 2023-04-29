import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import { SpinnerCircular } from 'spinners-react';
import Webcam from 'react-webcam';
import cl from './Video.module.css';
import {SpinnerDotted} from "spinners-react";

function Video({styles, isClicked, scanType}) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)

    // pause a webcam
    const [imageSrc, setImageSrc] = useState(null);

    // running detection function
    useEffect(() => {
        if(isClicked){
            handleCapture()
            runFacemesh()
        }
    }, [isClicked]);

    function handleCapture(){
        if (webcamRef.current) {
            // Capture an image
            const dataUrl = webcamRef.current.getScreenshot();
            setImageSrc(dataUrl);
        }
    };
    // load facemesh
    async function runFacemesh() {
        try{
            setIsLoading(true)
            const net = await facemesh.load();
            // setInterval(() => detect(net), 100)
            detect(net)

        }catch (err){
            console.error(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    // detect function
    async function detect(net) {
        if (
            typeof webcamRef.current !== 'undefined' &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // get video properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // set video width and height
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // set canvas width and height
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // make detections
            const prediction = await net.estimateFaces(video);

            //drawing image
            const ctx = canvasRef.current.getContext("2d")

            // ctx.drawImage(webcamRef.current.video, 0, 0, videoWidth, videoHeight)
            console.log(scanType)

            //To-Do: Optimize the code
            // cropping screenshot
            if(scanType === "whole"){
                ctx.drawImage(webcamRef.current.video,
                    prediction[0].scaledMesh[143][0], prediction[0].scaledMesh[10][1],
                    prediction[0].scaledMesh[372][0] - prediction[0].scaledMesh[143][0],
                    prediction[0].scaledMesh[152][1] - prediction[0].scaledMesh[10][1],
                    0, 0,
                    prediction[0].scaledMesh[372][0] - prediction[0].scaledMesh[143][0],
                    prediction[0].scaledMesh[152][1] - prediction[0].scaledMesh[10][1])
            }
            else if(scanType === "nose"){
                ctx.drawImage(webcamRef.current.video,
                    prediction[0].scaledMesh[112][0], prediction[0].scaledMesh[154][1],
                    prediction[0].scaledMesh[341][0] - prediction[0].scaledMesh[112][0],
                    prediction[0].scaledMesh[164][1] - prediction[0].scaledMesh[154][1],
                    0, 0,
                    prediction[0].scaledMesh[341][0] - prediction[0].scaledMesh[112][0],
                    prediction[0].scaledMesh[164][1] - prediction[0].scaledMesh[154][1])
            }
            else if(scanType === "forehead"){
                ctx.drawImage(webcamRef.current.video,
                    prediction[0].scaledMesh[54][0], prediction[0].scaledMesh[10][1]*0.8,
                    prediction[0].scaledMesh[284][0] - prediction[0].scaledMesh[54][0],
                    prediction[0].scaledMesh[168][1]*1.2 - prediction[0].scaledMesh[10][1],
                    0, 0,
                    prediction[0].scaledMesh[284][0] - prediction[0].scaledMesh[54][0],
                    prediction[0].scaledMesh[168][1]*1.2 - prediction[0].scaledMesh[10][1])
            }
            else if(scanType === "leftСheek"){
                ctx.drawImage(webcamRef.current.video,
                    prediction[0].scaledMesh[234][0], prediction[0].scaledMesh[23][1],
                    prediction[0].scaledMesh[245][0] - prediction[0].scaledMesh[234][0],
                    prediction[0].scaledMesh[135][1] - prediction[0].scaledMesh[23][1],
                    0, 0,
                    prediction[0].scaledMesh[245][0] - prediction[0].scaledMesh[234][0],
                    prediction[0].scaledMesh[135][1] - prediction[0].scaledMesh[23][1])
            }
            else if(scanType === "rightСheek"){
                ctx.drawImage(webcamRef.current.video,
                    prediction[0].scaledMesh[234][0], prediction[0].scaledMesh[23][1],
                    prediction[0].scaledMesh[245][0] - prediction[0].scaledMesh[234][0],
                    prediction[0].scaledMesh[135][1] - prediction[0].scaledMesh[23][1],
                    0, 0,
                    prediction[0].scaledMesh[245][0] - prediction[0].scaledMesh[234][0],
                    prediction[0].scaledMesh[135][1] - prediction[0].scaledMesh[23][1])
            }
            else if(scanType === "chin"){
                ctx.drawImage(webcamRef.current.video,
                    prediction[0].scaledMesh[214][0], prediction[0].scaledMesh[17][1]*1.05,
                    prediction[0].scaledMesh[364][0] - prediction[0].scaledMesh[135][0],
                    prediction[0].scaledMesh[152][1] - prediction[0].scaledMesh[17][1],
                    0, 0,
                    prediction[0].scaledMesh[364][0] - prediction[0].scaledMesh[135][0]*0.8,
                    prediction[0].scaledMesh[152][1] - prediction[0].scaledMesh[17][1]*0.9)
            }


            //DEV: drawing bounding box (real-time)
            // prediction.forEach(pred => {
            //     ctx.beginPath()
            //     ctx.lineWidth = "4"
            //     ctx.strokeStyle = "blue"
            //     ctx.rect(
            //         pred.scaledMesh[264][0], pred.scaledMesh[264][1],
            //         pred.scaledMesh[351][0] - pred.scaledMesh[264][0],
            //         pred.scaledMesh[394][1] - pred.scaledMesh[253][1]
            //     )
            //     ctx.stroke()
            // })
            console.log(prediction);
            return prediction
        }
    }

    return (
        <>
        <div style={styles} className={cl.wrapper}>
            <Webcam ref={webcamRef} className={cl.webcam} />
            {imageSrc &&
                <div>
                    <img className={cl.screenshot} style={{ position: 'absolute', zIndex: 1, left: '-25%' }} src={imageSrc} alt="captured image" />
                    {isLoading && <h2 className={cl.scanningText}>Scanning...</h2>}
                    <SpinnerDotted className={cl.spinner} size={76} thickness={139} speed={100} color="rgba(150, 172, 57, 1)" enabled={isLoading}/>
                </div>
            }
        </div>
            <canvas ref={canvasRef} className={cl.canvas} style={{ position: 'absolute', zIndex: 20, left: '-80%' }}     />
        </>
    );
}

export default Video;