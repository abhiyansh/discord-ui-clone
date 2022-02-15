import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import MessageCard from './MessageCard.js'

function TextChannel(props) {
    const [message, setMessage] = useState('');

    function onSend(){
        if(!message) return;
        props.appendMessage(props.channelName, message);
        
        setMessage("");
    }

    function onChange(e){
        setMessage(e.target.value);
    }

    function onKeyPress(e){
        if(e.key=='Enter') {   
            onSend();
            if(e.preventDefault) e.preventDefault();
            return false;
        }        
    }

    let messageList = props.servers[props.currentServer][props.channelName].map(msg=><li key={nanoid()}>
        <MessageCard msg={msg} user={props.user}/>
        </li>);

  return (
    <div className='textChannelContainer'>
        <h3>#{props.channelName}</h3>
        <ul className='messageList'>
            {messageList}
        </ul>
        <form className='messageBox'>
            <textarea 
                placeholder={`Message ${props.currentServer}`} 
                value={message} 
                onChange={onChange} 
                onKeyPress={onKeyPress}>
            </textarea>
        </form>        
    </div>
  )
}

export default TextChannel