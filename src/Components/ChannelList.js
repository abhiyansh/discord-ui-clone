import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function ChannelList(props) {

  const [newChannelName, setNewChannelName]=useState("");

  function addChannel(e){
    const inputDiv = document.getElementById('newChannelInputContainer');
    inputDiv.classList.toggle('visuallyHidden');   
    const input = document.getElementById('newChannelInput');
    input.removeAttribute('disabled');
  }

  function onKeyPress(e){
    if(e.key=='Enter') {
      props.addNewChannel(newChannelName);
      setNewChannelName(""); 
      const inputDiv = document.getElementById('newChannelInputContainer');
      inputDiv.classList.toggle('visuallyHidden');
    }
  }

  function onNewChannel(e){
    setNewChannelName(e.target.value);
  }

  let channelList = Object.keys(props.servers[props.currentServer]).map(name=>
    <li key={nanoid()} >
      <div onClick={props.toggleCurrentChannel} value={name} className={(name==props.channelName)?"activeChannel":""} >
        <span className='poundSymbol'>#</span> {name}
      </div>
    </li>
    );

  return (
    <div className='channelListContainer'>
      <div className='channelListTitle'>
        <h1>{props.currentServer}</h1>
        <div className='addTextChannelSymbol' onClick={addChannel}>+</div>
      </div>
      <ul className='channelList'>
          {channelList}
          <li>
            <div id="newChannelInputContainer" className='visuallyHidden'>
              <input  type="text" 
                      id="newChannelInput"
                      disabled
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