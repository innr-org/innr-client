import React, {useState} from 'react';
import dynamic from "next/dynamic";
const VideoRoom = dynamic(() => import('../Components/Lobby/VideoRoom'), { ssr: false });


function lobby(props) {
    return (
        <div>
            <VideoRoom/>
        </div>
    );
}

export default lobby;
