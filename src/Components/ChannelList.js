import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function ChannelList(props) {

  return (
    <div className='channelListContainer'>
        <ul className='channelList'>
            {props.channelList.map(name=><li key={nanoid()} >
              <div onClick={props.toggleCurrentChannel} data-value={name}>{name}</div>
              
              
              </li>)}
        </ul>
    </div>
  )
}

export default ChannelList