import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function ChannelList(props) {

  return (
    <div>
        <ul>
            {props.channelList.map(name=><li key={nanoid()}>{name}</li>)}
        </ul>
    </div>
  )
}

export default ChannelList