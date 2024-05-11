
import React from 'react'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import {useParams} from 'react-router-dom'

function Room() {

  const {roomId} = useParams();

  const meeting = async(element)=>{
    const appId = 1567136193;
    const serverSecret = "7fec2959a681dd5a50d3a9e5dd16b3e8" ;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(),'yogesh');
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks:[{
        name : 'copy link',
        url : `http://localhost:5173/room/${roomId}`
      }],
      scenario:{
        mode: ZegoUIKitPrebuilt.OneONoneCall
      }
    });
  };

  return (
    <div className='room-page'>
          <div ref={meeting}/>
    </div>     
  )
}

export default Room