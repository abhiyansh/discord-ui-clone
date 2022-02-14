import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function ChannelList(props) {

  function addChannel(e){

  }

  return (
    <div className='channelListContainer'>
      <div className='channelListTitle'>
        <h2>#Text-Channels</h2>
        <div className='addTextChannelSymbol' onClick={addChannel}>+</div>
      </div>
      <ul className='channelList'>
          {props.channelList.map(name=><li key={nanoid()} >
            <div onClick={props.toggleCurrentChannel} data-value={name}>{name}</div>
            </li>)}
          <li><div><input type="text" disabled id="newChannelInput" className='visuallyHidden'></input></div></li>
      </ul>
    </div>
  )
}

export default ChannelList