import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function ChannelList(props) {

  function addChannel(e){
    const input= document.getElementById('newChannelInput');
    input.classList.toggle('visuallyHidden');
    input.removeAttribute('disabled')

  }

  const [newChannelName, setNewChannelName]=useState("");
  function onKeyPress(e){
    if(e.key=='Enter') {
      props.addNewChannel(newChannelName);
      setNewChannelName(""); 
      const input= document.getElementById('newChannelInput');
      input.classList.toggle('visuallyHidden');
    }
  }
  function onNewChannel(e){
    setNewChannelName(e.target.value);
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
          <li>
            <div>
              <input  type="text" 
                      disabled 
                      id="newChannelInput" 
                      className='visuallyHidden' 
                      onChange={onNewChannel} 
                      onKeyPress={onKeyPress} 
                      value={newChannelName}>
              </input>
            </div>
          </li>

      </ul>
    </div>
  )
}

export default ChannelList